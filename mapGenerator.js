import * as THREE from "three";

export function generateMap(scene, mapData, tileSize) {
  const mapMatrix = mapData.map;
  const mapHeight = mapData.map_height;
  const mapWidth = mapData.map_width;

  for (let i = 0; i < mapHeight; i++) {
    for (let j = 0; j < mapWidth; j++) {
      if (mapMatrix[i][j] !== 0) {
        const shape = new THREE.Shape();
        shape.moveTo(0, 0);
        shape.lineTo(tileSize, 0);
        shape.lineTo(tileSize, tileSize);
        shape.lineTo(0, tileSize);
        shape.lineTo(0, 0);

        const extrusionSettings = { depth: 2, bevelEnabled: false };
        const geometry = new THREE.ExtrudeGeometry(shape, extrusionSettings);
        const material = new THREE.MeshStandardMaterial({ color: 0x888888 });
        const building = new THREE.Mesh(geometry, material);
        building.position.set(j * tileSize, 0, i * tileSize);
        scene.add(building);

        const box = new THREE.Box3().setFromObject(building);
        const boxHelper = new THREE.Box3Helper(box, 0xffff00);
        scene.add(boxHelper);
      }
    }
  }
}
