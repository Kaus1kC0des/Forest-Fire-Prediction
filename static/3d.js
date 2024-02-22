// Import necessary libraries
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { ShapeLoader } from 'three/examples/jsm/loaders/ShapeLoader';

// Initialize Three.js scene
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Add orbit controls for easy navigation
const controls = new OrbitControls(camera, renderer.domElement);
camera.position.z = 5;

// Load Tamil Nadu shapefile data
const loader = new ShapeLoader();
loader.load('./tamilNaduBoundary.geojson', function (geojson) {
    const shapes = geojson.features.map(feature => {
        const shape = new THREE.Shape();
        const coordinates = feature.geometry.coordinates[0];
        coordinates.forEach((point, index) => {
            const [x, y] = point;
            if (index === 0) {
                shape.moveTo(x, y);
            } else {
                shape.lineTo(x, y);
            }
        });
        return shape;
    });

    // Extrude shapes to create 3D geometry
    const extrudeSettings = { depth: 0.1, bevelEnabled: false };
    const geometry = new THREE.ExtrudeGeometry(shapes, extrudeSettings);
    const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
    const mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);
});

// Render loop
function animate() {
    requestAnimationFrame(animate);
    controls.update();
    renderer.render(scene, camera);
}
function init() {
    // Import necessary libraries
    // For Three.js, if you're including it via CDN in your HTML file, you don't need to import it here
    
    // Initialize Three.js scene
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);

    // Add orbit controls for easy navigation
    const controls = new THREE.OrbitControls(camera, renderer.domElement);
    camera.position.z = 5;

    // Add a simple cube to the scene
    const geometry = new THREE.BoxGeometry();
    const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
    const cube = new THREE.Mesh(geometry, material);
    scene.add(cube);

    // Render loop
    function animate() {
        requestAnimationFrame(animate);
        controls.update();
        renderer.render(scene, camera);
    }
    animate();
}

// Call the main function to initialize the 3D scene when the page loads
window.onload = init;
animate();
