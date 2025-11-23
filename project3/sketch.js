
let colorBlack, colorGray, colorNavy, colorGreen;
let colorIndex = 0; 
let shirtColorBlack, shirtColorBrown, shirtColorGray, shirtColorNavy;
let shirtColorIndex = 0;

function setup() {
  pixelDensity(1);
  createCanvas(600, 400);
saveGif('Caricature.gif', 10);


  colorBlack = color(30, 30, 30);
  colorGray = color(150, 150, 150); 
  colorNavy = color(40, 50, 85);
  colorGreen = color(40, 85, 50); 
  
  shirtColorBlack = color(20, 20, 20);
  shirtColorBrown = color(110, 70, 40);
  shirtColorGray = color(80, 80, 80);
  shirtColorNavy = color(30, 40, 70);
}

function draw() {
  
  background(240, 230, 210);
  noStroke();

  fill(50, 50, 60); 

   if (shirtColorIndex === 0) {
    fill(shirtColorBlack);
  } else if (shirtColorIndex === 1) {
    fill(shirtColorBrown);
  } else if (shirtColorIndex === 2) {
    fill(shirtColorGray);
  } else {
    fill(shirtColorNavy);
  }
  beginShape();
  vertex(225, 300); 
  vertex(375, 300); 
  vertex(525, 350); 
  vertex(525, 400); 
  vertex(75, 400);  
  vertex(75, 350); 
  endShape(CLOSE); 

  fill(245, 210, 180); // 피부색

  // 목
  rect(275, 260, 50, 40);


  arc(300, 300, 100, 80, 0, PI);

  // 귀 
  ellipse(200, 170, 40, 65); 
  ellipse(400, 170, 40, 65); 

  // 얼굴
  ellipse(300, 155, 200, 230);

  //모자
  stroke(0); 
  strokeWeight(2);
  
  
  if (colorIndex === 0) {
    fill(colorBlack);
  } else if (colorIndex === 1) {
    fill(colorGray);
  } else if (colorIndex === 2) {
    fill(colorNavy);
  } else {
    fill(colorGreen);
  }
  
  arc(300, 145, 230, 260, PI, 0); 
  rect(185, 100, 230, 50, 5);  
  
 
  stroke(255); 
  strokeWeight(3);
  line(360, 140, 395, 135); 
  noStroke(); 


  
  // 눈썹
  fill(30, 30, 30);
  arc(265, 155, 40, 15, PI, TWO_PI); 
  arc(335, 155, 40, 15, PI, TWO_PI); 

  // 눈 
  fill(255); 
  ellipse(265, 165, 40, 20); 
  ellipse(335, 165, 40, 20); 
  
  //눈동자 움직임
  let pupilLX = map(mouseX, 0, width, 265 - 4, 265 + 4);
  let pupilLY = map(mouseY, 0, height, 165 - 2, 165 + 2);
  let pupilRX = map(mouseX, 0, width, 335 - 4, 335 + 4);
  let pupilRY = map(mouseY, 0, height, 165 - 2, 165 + 2);

  fill(0); 
  circle(pupilLX, pupilLY, 12); 
  circle(pupilRX, pupilRY, 12); 

  stroke(0);
  strokeWeight(2);
  noFill();
  
  // 코
  line(295, 205, 300, 215); 
  line(300, 215, 305, 215); 

  // 입
  arc(300, 240, 50, 10, 0, PI);
}

//모자,티셔츠
function keyPressed() {
  if (key === 'd' || key === 'D') {
    colorIndex++;
    if (colorIndex > 3) {
      colorIndex = 0;
    }
  } else if (key === 'a' || key === 'A') {
    colorIndex--;
    if (colorIndex < 0) {
      colorIndex = 3;
    }
  }
  
   if (key === 's' || key === 'S') {
    shirtColorIndex++;
    if (shirtColorIndex > 3) {
      shirtColorIndex = 0;
    }
  } else if (key === 'w' || key === 'W') {
    shirtColorIndex--;
    if (shirtColorIndex < 0) {
      shirtColorIndex = 3;
    }
  }
  
}