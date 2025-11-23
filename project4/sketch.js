let cycle = 0;
let dayDuration = 600; 

function setup() {
  createCanvas(600, 400);
  pixelDensity(1);
}

function draw() {
  // 1시간 흐름 계산
  cycle = (frameCount % dayDuration) / dayDuration;

  // 배경색 변화
  let skyColor;
  let cDay = color(135, 206, 235);   
  let cSunset = color(255, 100, 100); 
  let cNight = color(30, 35, 40);    

  if (cycle < 0.15) {
    skyColor = cDay;
  } else if (cycle < 0.25) {
    let t = map(cycle, 0.15, 0.25, 0, 1);
    skyColor = lerpColor(cDay, cSunset, t);
  } else if (cycle < 0.35) {
    let t = map(cycle, 0.25, 0.35, 0, 1);
    skyColor = lerpColor(cSunset, cNight, t);
  } else if (cycle < 0.65) {
    skyColor = cNight;
  } else if (cycle < 0.75) {
    let t = map(cycle, 0.65, 0.75, 0, 1);
    skyColor = lerpColor(cNight, cSunset, t);
  } else if (cycle < 0.85) {
    let t = map(cycle, 0.75, 0.85, 0, 1);
    skyColor = lerpColor(cSunset, cDay, t);
  } else {
    skyColor = cDay;
  }

  background(skyColor);

  // 해와 달 뜨고 지고
  push();
  translate(width / 2, height - 150);
  rotate(cycle * TWO_PI - PI / 2);

  // 해
  noStroke();
  fill(255, 200, 50);
  circle(250, 0, 60);

  // 달
  fill(255, 235, 59, 70);
  circle(-250, 0, 120);
  pop();

  // 별과 유성
  if (cycle > 0.25 && cycle < 0.75) {
    drawOriginalNightSky();
  }

  // 빌딩
  drawOriginalBuildings();
}

// 밤하늘 그리기 함수
function drawOriginalNightSky() {
  let alpha = 0;
  if (cycle < 0.5) {
    alpha = map(cycle, 0.25, 0.5, 0, 255);
  } else {
    alpha = map(cycle, 0.5, 0.75, 255, 0);
  }

  noStroke();
  fill(255, 235, 59, min(alpha, 200));

  // 별
  circle(50, 70, 3);
  circle(180, 100, 2.5);
  circle(300, 50, 3);
  circle(580, 20, 2.5);
  circle(80, 10, 2.5);
  circle(220, 20, 2);
  circle(420, 80, 3);
  circle(530, 70, 2.5);
  circle(590, 10, 2);
  circle(140, 10, 3);
  circle(120, 40, 2.5);
  circle(250, 80, 2);
  circle(400, 60, 2.5);
  circle(30, 120, 2);
  circle(150, 150, 3);
  circle(350, 110, 2.5);
  circle(470, 160, 2);
  circle(10, 180, 3);
  circle(280, 130, 2.5);
  circle(450, 30, 2);
  circle(370, 170, 2.5);
  circle(550, 190, 3);

  // 유성
  stroke(255, 235, 59, min(alpha, 150));
  strokeWeight(1.5);
  line(100, 30, 200, 60);
  line(400, 50, 500, 70);
  line(20, 100, 80, 120);
  line(300, 10, 350, 30);
}

// 빌딩 그리기 함수
function drawOriginalBuildings() {
  stroke(0);
  strokeWeight(2);

  fill(80, 80, 80);
  rect(0, 200, 150, 200);
  rect(100, 150, 100, 250);
  fill(95, 95, 95);
  rect(300, 220, 120, 180);
  rect(400, 180, 90, 220);

  fill(70, 70, 70, 200);
  rect(80, 190, 120, 210);
  fill(100, 100, 100, 200);
  rect(200, 120, 150, 280);

  fill(130, 130, 130);
  rect(0, 250, 90, 150);
  rect(250, 100, 100, 300);
  rect(480, 160, 100, 240);

  fill(100, 100, 100);
  quad(150, 400, 220, 400, 250, 200, 180, 180);
  fill(120, 120, 120);
  quad(500, 400, 580, 400, 590, 220, 530, 200);

  // 창문 색상 변화
  let winColor;
  let cWinDay = color(20, 20, 20);       
  let cWinNight = color(255, 235, 59);   

  if (cycle > 0.15 && cycle < 0.85) {
    let t = 0;
    if (cycle < 0.35) {
      t = map(cycle, 0.15, 0.35, 0, 1);
      winColor = lerpColor(cWinDay, cWinNight, t);
    } else if (cycle > 0.65) {
       t = map(cycle, 0.65, 0.85, 0, 1); 
       winColor = lerpColor(cWinNight, cWinDay, t);
    } else {
       winColor = cWinNight;
    }
  } else {
    winColor = cWinDay;
  }

  noStroke();
  fill(winColor);

  // 창문
  for (let y = 120; y < 380; y += 40) {
    for (let x = 270; x < 330; x += 30) {
      rect(x, y, 10, 10); 
    }
  }

  for (let y = 180; y < 380; y += 50) {
    for (let x = 500; x < 560; x += 40) {
      rect(x, y, 10, 10);
    }
  }
  
  for(let y = 170; y < 380; y += 60) {
      rect(140, y, 10, 10);
  }

  // 빌딩 지붕, 피뢰침
  stroke(0);
  strokeWeight(1.5);

  fill(95, 95, 95);
  triangle(100, 150, 200, 150, 150, 80);

  fill(95, 95, 95);
  arc(445, 180, 90, 80, PI, 0);

  line(275, 120, 275, 60);
  line(275, 80, 260, 70);
  line(275, 80, 290, 70);
}
/*
function mousePressed() {
   saveGif('abstract_ani.gif', 10);

 }
*/
