import { useEffect, useRef } from 'react';
import * as THREE from 'three';

const ParticleBackground = () => {
    const containerRef = useRef(null);

    useEffect(() => {
        if (!containerRef.current) return;

        const container = containerRef.current;
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });

        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        renderer.setClearColor(0x000000, 0);
        container.appendChild(renderer.domElement);

        // Particle system
        const particleCount = 200;
        const positions = new Float32Array(particleCount * 3);
        const colors = new Float32Array(particleCount * 3);
        const sizes = new Float32Array(particleCount);

        const colorPalette = [
            new THREE.Color(0x7C3AED), // electric purple
            new THREE.Color(0x00E5FF), // neon cyan
            new THREE.Color(0xFF4D9D), // vibrant pink
            new THREE.Color(0x22D3EE), // highlight cyan
        ];

        for (let i = 0; i < particleCount; i++) {
            positions[i * 3] = (Math.random() - 0.5) * 20;
            positions[i * 3 + 1] = (Math.random() - 0.5) * 20;
            positions[i * 3 + 2] = (Math.random() - 0.5) * 20;

            const color = colorPalette[Math.floor(Math.random() * colorPalette.length)];
            colors[i * 3] = color.r;
            colors[i * 3 + 1] = color.g;
            colors[i * 3 + 2] = color.b;

            sizes[i] = Math.random() * 3 + 1;
        }

        const geometry = new THREE.BufferGeometry();
        geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
        geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));
        geometry.setAttribute('size', new THREE.BufferAttribute(sizes, 1));

        const material = new THREE.PointsMaterial({
            size: 0.05,
            vertexColors: true,
            transparent: true,
            opacity: 0.6,
            blending: THREE.AdditiveBlending,
            sizeAttenuation: true,
        });

        const points = new THREE.Points(geometry, material);
        scene.add(points);

        // Connection lines
        const lineGeometry = new THREE.BufferGeometry();
        const linePositions = [];
        const lineColors = [];
        const maxDistance = 3;

        for (let i = 0; i < particleCount; i++) {
            for (let j = i + 1; j < particleCount; j++) {
                const dx = positions[i * 3] - positions[j * 3];
                const dy = positions[i * 3 + 1] - positions[j * 3 + 1];
                const dz = positions[i * 3 + 2] - positions[j * 3 + 2];
                const dist = Math.sqrt(dx * dx + dy * dy + dz * dz);

                if (dist < maxDistance) {
                    linePositions.push(
                        positions[i * 3], positions[i * 3 + 1], positions[i * 3 + 2],
                        positions[j * 3], positions[j * 3 + 1], positions[j * 3 + 2]
                    );
                    const alpha = 1 - dist / maxDistance;
                    lineColors.push(0.486, 0.227, 0.929, alpha, 0.486, 0.227, 0.929, alpha);
                }
            }
        }

        lineGeometry.setAttribute('position', new THREE.Float32BufferAttribute(linePositions, 3));
        const lineMaterial = new THREE.LineBasicMaterial({
            color: 0x7C3AED,
            transparent: true,
            opacity: 0.08,
            blending: THREE.AdditiveBlending,
        });
        const lines = new THREE.LineSegments(lineGeometry, lineMaterial);
        scene.add(lines);

        // Floating torus knot
        const torusGeometry = new THREE.TorusKnotGeometry(2, 0.4, 128, 16);
        const torusMaterial = new THREE.MeshBasicMaterial({
            color: 0x7C3AED,
            wireframe: true,
            transparent: true,
            opacity: 0.04,
        });
        const torus = new THREE.Mesh(torusGeometry, torusMaterial);
        torus.position.set(5, 0, -5);
        scene.add(torus);

        // Icosahedron
        const icoGeometry = new THREE.IcosahedronGeometry(1.5, 1);
        const icoMaterial = new THREE.MeshBasicMaterial({
            color: 0x00E5FF,
            wireframe: true,
            transparent: true,
            opacity: 0.05,
        });
        const ico = new THREE.Mesh(icoGeometry, icoMaterial);
        ico.position.set(-6, 2, -3);
        scene.add(ico);

        camera.position.z = 8;

        let mouseX = 0;
        let mouseY = 0;
        let animationId;

        const handleMouseMove = (event) => {
            mouseX = (event.clientX / window.innerWidth - 0.5) * 2;
            mouseY = (event.clientY / window.innerHeight - 0.5) * 2;
        };

        const handleResize = () => {
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(window.innerWidth, window.innerHeight);
        };

        const animate = () => {
            animationId = requestAnimationFrame(animate);

            const time = Date.now() * 0.001;

            points.rotation.x = time * 0.05 + mouseY * 0.1;
            points.rotation.y = time * 0.08 + mouseX * 0.1;

            lines.rotation.x = points.rotation.x;
            lines.rotation.y = points.rotation.y;

            torus.rotation.x = time * 0.15;
            torus.rotation.y = time * 0.1;

            ico.rotation.x = time * 0.1;
            ico.rotation.z = time * 0.08;

            camera.position.x += (mouseX * 0.5 - camera.position.x) * 0.02;
            camera.position.y += (-mouseY * 0.5 - camera.position.y) * 0.02;
            camera.lookAt(scene.position);

            renderer.render(scene, camera);
        };

        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('resize', handleResize);
        animate();

        return () => {
            cancelAnimationFrame(animationId);
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('resize', handleResize);
            if (container.contains(renderer.domElement)) {
                container.removeChild(renderer.domElement);
            }
            geometry.dispose();
            material.dispose();
            lineGeometry.dispose();
            lineMaterial.dispose();
            torusGeometry.dispose();
            torusMaterial.dispose();
            icoGeometry.dispose();
            icoMaterial.dispose();
            renderer.dispose();
        };
    }, []);

    return <div ref={containerRef} className="particle-bg" />;
};

export default ParticleBackground;
