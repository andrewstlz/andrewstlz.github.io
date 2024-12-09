let ellipses = [];
let bgcolor1 = 0;

function setup() {
  createCanvas(400, 400);
  background(bgcolor1);

  colorArray1 = [];
  for (let x = 0; x <= width; x = x + 5) {
    colorArray1.push(color(random(200, 255), 0, 100));
  }
  colorArray2 = [];
  for (let x = 0; x <= width; x = x + 5) {
    colorArray2.push(color(0, 150, random(100, 255)));
  }
}

function mousePressed() {
  fill(255, random(200, 255), 255);
  circle(random(width), random(height), 10);
}

function reset() {
  if (bgcolor1 == 0) {
    bgcolor1 = 255;
  }
  clear();
  noLoop();
}

function draw() {
  for (let x = 0; x <= mouseX; x = x + 5) {
    noStroke();
    if (x < width / 4) {
      fill(random(colorArray1));
      rect(x, x - 5, 25, 3);
      fill(random(colorArray2));
      rect(x, 400 - x, 25, 3);
    } else if (x < 3 * width / 8) {
      fill(random(colorArray1));
      rect(x, 200 - x, 15, 3);
      fill(random(colorArray2));
      rect(x, x + 200, 15, 3);
    } else if (x < 5 * width / 8) {
      fill(random(colorArray1));
      rect(x, x - 100, 25, 3);
      fill(random(colorArray2));
      rect(x, 500 - x, 25, 3);
    } else if (x < 3 * width / 4) {
      fill(random(colorArray1));
      rect(x, 400 - x, 15, 3);
      fill(random(colorArray2));
      rect(x, x, 15, 3);
    } else {
      fill(random(colorArray1));
      rect(x, x - 200, 25, 3);
      fill(random(colorArray2));
      rect(x, 600 - x, 25, 3);
    }  
  }
}
