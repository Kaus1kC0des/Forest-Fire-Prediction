console.log("Hello World");
import * as THREE from './three.module.js';
import { STLLoader } from './STLLoader.js';

var loader = new STLLoader();

// Create a scene
var scene = new THREE.Scene();

// Create a camera
var camera = new THREE.PerspectiveCamera(270, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.set(100, 20 , 30 ); // Update camera position
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
  geometry.computeBoundingBox();
  var boundingBox = geometry.boundingBox;
  var center = new THREE.Vector3();
  boundingBox.getCenter(center);
  mesh.position.sub(center);
  
  scene.add(mesh);

  // Animate the model
  function animate() {
    requestAnimationFrame(animate);
    mesh.rotation.x = 1; // Set rotation to 0 on the x-axis
    mesh.rotation.y = 1; // Set rotation to 0 on the y-axis
    mesh.rotation.z = 1; // Set rotation to 0 on the z-axis
    renderer.render(scene, camera); // Render the scene with the updated camera position and rotation
  }

  animate();

});
