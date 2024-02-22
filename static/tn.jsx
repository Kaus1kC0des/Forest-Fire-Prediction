import React, { useEffect } from 'react';
import * as THREE from 'three';
import tamilnaduModel from './tamilnadu.glb'; // Path to your 3D model file

function App() {
  useEffect(() => {
    // Create a new scene
    const scene = new THREE.Scene();

    // Create a camera
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.set(0, 0, 5);

    // Create a renderer
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);

    // Load the 3D model
    const loader = new THREE.GLTFLoader();
    loader.load(tamilnaduModel, (gltf) => {
      scene.add(gltf.scene);
    });

    // Add lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.5);
    directionalLight.position.set(0, 1, 0);
    scene.add(directionalLight);

    // Animation loop
    const animate = function () {
      requestAnimationFrame(animate);

      // Rotate the model
      if (scene.children.length > 0) {
        scene.children[0].rotation.y += 0.01;
      }

      renderer.render(scene, camera);
    };

    animate();

    // Handle window resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('resize', handleResize);

    // Clean up on unmount
    return () => {
      window.removeEventListener('resize', handleResize);
      document.body.removeChild(renderer.domElement);
    };
  }, []);

  return null; // We don't need to render anything from React
}

export default App;
