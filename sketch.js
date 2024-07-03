function setup() {
  createCanvas(400, 400);
  background(220);
}

function draw() {
  fill("rgb(0,50,255)");
  stroke("black");
  strokeWeight(5);
  
  if(mouseIsPressed){
    rect(mouseX,mouseY,50,70);
  }
}
