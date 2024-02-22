import * as THREE from '//unpkg.com/three/build/three.module.js';
const { useEffect, useRef } = React;

const World = () => {
  const globeEl = useRef();
  const globeRotationTimeout = useRef(null);

  useEffect(() => {
    const globe = globeEl.current;

    globe.controls().autoRotate = true;
    globe.controls().autoRotateSpeed = -1;
    globe.controls().enableRotate = false;
    globe.controls().enableZoom = false;

    const CLOUDS_IMG_URL = './clouds.png';
    const CLOUDS_ALT = 0.004;
    const CLOUDS_ROTATION_SPEED = -0.006;

    new THREE.TextureLoader().load(CLOUDS_IMG_URL, cloudsTexture => {
      const clouds = new THREE.Mesh(
        new THREE.SphereGeometry(globe.getGlobeRadius() * (1 + CLOUDS_ALT), 75, 75),
        new THREE.MeshPhongMaterial({ map: cloudsTexture, transparent: true })
      );
      globe.scene().add(clouds);

      (function rotateClouds() {
        clouds.rotation.y += CLOUDS_ROTATION_SPEED * Math.PI / 180;
        requestAnimationFrame(rotateClouds);
      })();
    });

    globeRotationTimeout.current = setTimeout(() => {
      globe.controls().autoRotate = false;
      globe.controls().enableRotate = false;
      globe.pointOfView({lat: 20, lng: 78, altitude: 1.5}, 3000);
    }, 10000);

    return () => {
      clearTimeout(globeRotationTimeout.current);
    };
  }, []);

  return (
    <div class="glb" style={{ position: 'relative', left:'17%' ,transform: 'scale(2.3)' }}>
      <Globe
        ref={globeEl}
        animateIn={true}
        backgroundColor={'#00001f'}
        globeImageUrl="//unpkg.com/three-globe/example/img/earth-blue-marble.jpg"
        bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
      />
    </div>
  );
};

ReactDOM.render(
  <World />,
  document.getElementById('globeViz')
);