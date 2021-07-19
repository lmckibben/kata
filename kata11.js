// Use the value below whenever you need the value of Pi
const PI = 3.14159 ;

const sphereVolume = function (radius) {
  sphereVol = (4 / 3) * PI * Math.pow(radius, 3);
  return sphereVol
}

console.log(4186 < sphereVolume(10) && sphereVolume(10) < 4189);

const coneVolume = function (radius, height) {
  coneVol = (1 / 3) * PI * Math.pow(radius, 2) * height;
  return coneVol
}

console.log(45 < coneVolume(3, 5) && coneVolume(3, 5) < 49);

const prismVolume = function (height, width, depth) {
  prismVol = height * width * depth;
  return prismVol
}

console.log(prismVolume(3, 4, 5) === 60);

const totalVolume = function (solids) {
  let totalVol = 0;

  for (const solid of solids){
    if (solid.type === "sphere") {
      totalVol += sphereVolume(solid.radius);
    } else if (solid.type === "cone"){
      totalVol += coneVolume(solid.radius, solid.height);
    }else if (solid.type === "prism"){
      totalVol += prismVolume(solid.height, soild.width, solid.depth);
    }
  }
  return totalVol
}

const largeSphere = {
  type: 'sphere',
  radius: 40
}

const smallSphere = {
  type: 'sphere',
  radius: 10
}

const cone = {
  type: 'cone',
  radius: 3,
  height: 5
}

const duck = [
  largeSphere,
  smallSphere,
  cone
]

console.log(272000 < totalVolume(duck) && totalVolume(duck) < 275000);