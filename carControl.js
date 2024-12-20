import * as THREE from "three";

export function createCar(scene) {
  const carGeometry = new THREE.BoxGeometry(0.6, 0.6, 0.6);
  const carMaterial = new THREE.MeshPhongMaterial({ color: 0x0000ff });
  const car = new THREE.Mesh(carGeometry, carMaterial);
  car.position.set(0, 0.3, 0);
  scene.add(car);
  return car;
}

export function generatePath(scene, path) {
  const points = path.map((point) => new THREE.Vector3(point[1], 0.3, point[0]));
  const curve = new THREE.CatmullRomCurve3(points);

  const curvePoints = curve.getPoints(100);
  const curveGeometry = new THREE.BufferGeometry().setFromPoints(curvePoints);
  const curveMaterial = new THREE.LineBasicMaterial({ color: 0x0000ff });
  const curveLine = new THREE.Line(curveGeometry, curveMaterial);
  curveLine.visible = true;
  scene.add(curveLine);

  return curve;
}
