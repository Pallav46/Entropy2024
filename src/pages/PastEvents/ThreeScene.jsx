import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { TextureLoader, ShaderMaterial, PlaneGeometry, Mesh, PerspectiveCamera, WebGLRenderer, Scene } from 'three';
import gsap from 'gsap';
import vertex from './shaders/vertex.glsl';
import fragment from './shaders/fragment.glsl';
// import './style.css';

const ThreeScene = () => {
    const containerRef = useRef(null);
    const timeRef = useRef(0);
    const materialRef = useRef(null);
    const imageStoreRef = useRef([]);
    const uStartIndexRef = useRef(0);

    const resize = (camera, renderer, container) => {
        const width = container.offsetWidth;
        const height = container.offsetHeight;
        renderer.setSize(width, height);
        camera.aspect = width / height;
        camera.updateProjectionMatrix();
        setPosition(imageStoreRef.current, height, width);
    };

    const setPosition = (imageStore, height, width) => {
        imageStore.forEach((img) => {
            const bounds = img.img.getBoundingClientRect();
            img.mesh.position.y = -bounds.top + height / 2 - bounds.height / 2;
            img.mesh.position.x = bounds.left - width / 2 + bounds.width / 2;
        });
    };

    useEffect(() => {
        const container = containerRef.current;
        const width = window.innerWidth;
        const height = window.innerHeight;

        const scene = new Scene();
        const camera = new PerspectiveCamera(75, width / height, 100, 2000);
        camera.position.z = 200;
        camera.fov = 2 * Math.atan(height / 2 / 200) * (180 / Math.PI);

        const renderer = new WebGLRenderer({ antialias: true, alpha: true });
        renderer.setPixelRatio(window.devicePixelRatio);
        renderer.setSize(width, height);
        container.appendChild(renderer.domElement);

        const images = [...document.querySelectorAll('.images img')];
        const textureLoader = new TextureLoader();
        const textures = images.map((img) => textureLoader.load(img.src));

        const uniforms = {
            uTime: { value: 0 },
            uTimeline: { value: 0.2 },
            uStartIndex: { value: 1 },
            uEndIndex: { value: 2 },
            uImage1: { value: textures[0] },
            uImage2: { value: textures[1] },
            uImage3: { value: textures[2] },
            uImage4: { value: textures[3] },
        };

        const material = new ShaderMaterial({
            uniforms,
            vertexShader: vertex,
            fragmentShader: fragment,
            transparent: true,
        });
        materialRef.current = material;

        images.forEach((img) => {
            const bounds = img.getBoundingClientRect();
            const geometry = new PlaneGeometry(bounds.width, bounds.height);
            const mesh = new Mesh(geometry, material);
            scene.add(mesh);
            imageStoreRef.current.push({
                img,
                mesh,
                top: bounds.top,
                left: bounds.left,
                width: bounds.width,
                height: bounds.height,
            });
        });

        const hoverOverLinks = () => {
            const links = document.querySelectorAll('.links a');
            links.forEach((link, i) => {
                link.addEventListener('mouseover', () => {
                    material.uniforms.uTimeline.value = 0.0;
                    gsap.to(material.uniforms.uTimeline, {
                        value: 4.0,
                        duration: 2,
                        onStart: () => {
                            const uEndIndex = i;
                            material.uniforms.uStartIndex.value = uStartIndexRef.current;
                            material.uniforms.uEndIndex.value = uEndIndex;
                            uStartIndexRef.current = uEndIndex;
                        },
                    });
                });
            });
        };

        hoverOverLinks();
        const handleResize = () => resize(camera, renderer, container);
        window.addEventListener('resize', handleResize);
        handleResize();

        const render = () => {
            timeRef.current += 0.1;
            material.uniforms.uTime.value = timeRef.current;
            renderer.render(scene, camera);
            requestAnimationFrame(render);
        };
        render();

        return () => {
            window.removeEventListener('resize', handleResize);
            container.removeChild(renderer.domElement);
        };
    }, []);

    return <div ref={containerRef} className="canvas w-1/2 h-screen relative flex items-center justify-center"></div>;
};

export default ThreeScene;
