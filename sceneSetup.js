import * as THREE from "three";
import { OrbitControls } from "@three-ts/orbit-controls";
export function setupScene(containerId) {
  const container = document.getElementById(containerId);
  const scene = new THREE.Scene();
  scene.background = new THREE.Color(0.95,0.95,0.95);

  const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 1, 2000);
  const mapHeight = 15;
  const mapWidth = 15;
  camera.position.set(mapWidth / 2, 30, mapHeight * 1.5); // 地图中心正前方偏上
  camera.lookAt(mapWidth / 2, 0, mapHeight / 2); //指向地图中心

  const renderer = new THREE.WebGLRenderer({ antialias: true });
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.domElement.style.position = "absolute";
  renderer.domElement.style.zIndex = "1";
  container.appendChild(renderer.domElement);

  const controls = new OrbitControls(camera, renderer.domElement);

  // 光照设置
  const ambientLight = new THREE.AmbientLight(0xffffff, 1);
  scene.add(ambientLight);
  const pointLight = new THREE.PointLight(0xffffff, 2);
  pointLight.position.set(10, 15, 10);
  scene.add(pointLight);

  return { scene, camera, renderer, controls };
}
