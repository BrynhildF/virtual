import { setupScene } from "./sceneSetup.js";
import { generateMap } from "./mapGenerator.js";
import { createCar, generatePath } from "./carControl.js";
import { fetchMapData, fetchPathData } from "./api.js";
import { animate } from "./animate.js";

const { scene, camera, renderer, controls } = setupScene("threeContainer");

const mapRequest = {
  seed: 0,
  map_width: 15,
  map_height: 15,
  min_n_barricades: 4,
  max_n_barricades: 4,
  max_barricade_size: 12,
};
let t = 0;
let curve1;

fetchMapData(mapRequest)
  .then((mapData) => {
    generateMap(scene, mapData, 1);
    console.log(mapData);
    
  })
  .catch((error) => console.error(error));

const car = createCar(scene);

fetchPathData(0, 0, 6, 6)
  .then((path) => {
    
    curve1 = generatePath(scene, path);
    animate(scene, camera, renderer, controls, car, curve1, t);
    console.log(path);
    
  })
  .catch((error) => console.error(error));

document.getElementById("start").addEventListener("click", () => {
  if (curve1) curve1.visible = true;
});

