function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
  noStroke();
}

function draw() {
}

function mousePressed() {

  // randomly generate triangles with mousePressed
  for (let i = 0; i < 20; i++) {

    let x;
    let y;

    // choose between yellow and white
    if (random(1) < 0.3) {

      // yellow triangles stay closer to the mouse
      x = mouseX + random(-30, 30);
      y = mouseY + random(-30, 30);

      fill(255, 220, 0);

    } else {

      // white triangles spread further away
      x = mouseX + random(-100, 100);
      y = mouseY + random(-100, 100);

      fill(255);

    }

    // random size
    let size = random(10, 35);

    push();

    translate(x, y);

    // random rotation
    rotate(random(TWO_PI));

    triangle(
      0, -size,
      -size, size,
      size, size
    );

    pop();
  }
}