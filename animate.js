export function animate(scene, camera, renderer, controls, car, curve, t) {
    function update() {
      requestAnimationFrame(update);
      if (curve && curve.visible) {
        const speed = 0.001;
        if (t <= 1) {
          const position = curve.getPointAt(t);
          car.position.set(position.x, position.y, position.z);
          const nextPosition = curve.getPointAt(Math.min(t + 0.01, 1));
          car.lookAt(nextPosition);
          t += speed;
        }
      }
      
      controls.update();
      renderer.render(scene, camera);
      //console.log(scene)
    }
    update();
  }
  