let eggX;
let eggY;

function setup() {
  createCanvas(windowWidth, windowHeight);

  //fried egg in the middle 
  eggX = width / 2;
  eggY = height / 2;

  noStroke();
}

function draw() {
  background(50);

 // distance between mouse and egg
  let d = dist(mouseX, mouseY, eggX, eggY);

  // egg escapes when mouse gets close
  if (d < 160) {
    let dx = eggX - mouseX;
    let dy = eggY - mouseY;
    let len = sqrt(dx * dx + dy * dy);

    if (len > 0) {
      dx = dx / len;
      dy = dy / len;
    }
    eggX += dx * 2;
    eggY += dy * 2;
  }

  // keep egg inside canvas
  eggX = constrain(eggX, 110, width - 110);
  eggY = constrain(eggY, 90, height - 90);

  drawEgg();

}

function drawEgg() {

  // egg white
  fill(255);
  beginShape();

  // use points to make an egg shape
  for (let angle = 0; angle < TWO_PI; angle += 0.1) {

    let radiusX = 100;
    let radiusY = 80;

    let x = eggX + cos(angle) * radiusX;
    let y = eggY + sin(angle) * radiusY;

    // distance between mouse and this point
    let d = dist(mouseX, mouseY, x, y);

    // dent when mouse gets close
    if (d < 80) {

      let dx = x - mouseX;
      let dy = y - mouseY;

      let len = sqrt(dx * dx + dy * dy);

      if (len > 0) {
        dx = dx / len;
        dy = dy / len;
      }

      let pushAmount = map(d, 0, 80, 35, 0);

      x -= dx * pushAmount;
      y -= dy * pushAmount;
    }

    // IMPORTANT: this must be inside the for loop
    vertex(x, y);
  }

  endShape(CLOSE);


  // egg yolk
  fill(255, 190, 0);
  ellipse(eggX, eggY, 65, 65);
}