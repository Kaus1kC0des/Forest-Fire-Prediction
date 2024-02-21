import * as THREE from '//unpkg.com/three/build/three.module.js';

  const { useEffect, useRef } = React;

  const World = () => {
    const globeEl = useRef();

    useEffect(() => {
      const globe = globeEl.current;

      // Auto-rotate
      globe.controls().autoRotate = true;
      globe.controls().autoRotateSpeed = -1;
      globe.controls().animateIn = true;
      globe.controls().enableRotate = false;
      globe.controls().enableZoom = false;
 


      // Add clouds sphere
      const CLOUDS_IMG_URL = './clouds.png'; // from https://github.com/turban/webgl-earth
      const CLOUDS_ALT = 0.004;
      const CLOUDS_ROTATION_SPEED = -0.006; // deg/frame

      new THREE.TextureLoader().load(CLOUDS_IMG_URL, cloudsTexture => {
        const clouds = new THREE.Mesh(
          new THREE.SphereGeometry(globe.getGlobeRadius() * (1 + CLOUDS_ALT), 75, 75),
          new THREE.MeshPhongMaterial({ map: cloudsTexture, transparent: true })
        );
       globe.scene();

        (function rotateClouds() {
          clouds.rotation.y += CLOUDS_ROTATION_SPEED * Math.PI / 180;
          requestAnimationFrame(rotateClouds);
        })();
      });
    }, []);

    return (
      <div style={{ position: 'relative', left: '400px', transition: 'left 3s' }}>
          
          <Globe
            ref={globeEl}
            animateIn={true}
            z-index={1}
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
