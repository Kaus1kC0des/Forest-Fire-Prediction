console.log("Hello World");
import * as THREE from './three.module.js';
import { STLLoader } from './STLLoader.js';

var loader = new STLLoader();

// Create a scene
var scene = new THREE.Scene();

// Create a camera
var camera = new THREE.PerspectiveCamera(70, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.set(0, 0 , 5 ); // Update camera position
camera.rotation.x = 0; // Set rotation to 0.5 radians on the x-axis
camera.rotation.y = 90; // Set rotation to 0.5 radians on the y-axis
camera.rotation.z = 0; // Set rotation to 0.5 radians on the z-axis

camera.lookAt(scene.position); // Look at the center of the scene

// Create a renderer
var renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Load the STL model
loader.load('../final_map.stl', function (geometry) {
  var material = new THREE.MeshNormalMaterial();
  var mesh = new THREE.Mesh(geometry, material);

  

  // Scale the model
  // mesh.scale.set(30, 30, 30);

  // Center the model
  // geometry.computeBoundingBox();
  // var boundingBox = geometry.boundingBox;
  // var center = new THREE.Vector3();
  // boundingBox.getCenter(center);
  // mesh.position.set(24.600, -6.060, 16.920);
   // Set the new position of the mesh
  mesh.position.set(0, 0, 0);
  scene.add(mesh);

  // Animate the model
  function animate() {
    requestAnimationFrame(animate);
    mesh.rotation.x  = 1; // Set rotation to 0 on the x-axis
    mesh.rotation.y = 1; // Set rotation to 0 on the y-axis
    mesh.rotation.z = 1; // Set rotation to 0 on the z-axis
    renderer.render(scene, camera); // Render the scene with the updated camera position and rotation
  }

  animate();

  });
