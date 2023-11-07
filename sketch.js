function setup() {
    createCanvas(400, 400);
    background("cyan");
  }
  
  function draw() {
    stroke("yellow");
    fill("green");
    
  
  
  
    if(mouseIsPressed) {
      rect(mouseX,mouseY,20,20);
    }
  }