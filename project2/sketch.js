function setup() {

  createCanvas(600, 400);

  background(240, 230, 210);

  noLoop();

}



function draw() {


  noStroke();



   //티셔츠 

  fill(50, 50, 60);  




  beginShape();
  // 목 
  vertex(225, 300); 

  vertex(375, 300); 

  //어깨
  vertex(525, 350); 

  vertex(525, 400); 

  vertex(75, 400); 

  vertex(75, 350);  

  endShape(CLOSE);  



 //  피부색 

  fill(245, 210, 180);  



  rect(275, 260, 50, 40);



  // U넥

  arc(300, 300, 100, 80, 0, PI);



   //귀 

  ellipse(200, 170, 40, 65);  

  ellipse(400, 170, 40, 65);  


   //얼굴(머리) 

  ellipse(300, 155, 200, 230);



  // 검은색 모자 

  stroke(0);  

  strokeWeight(2);

  fill(30, 30, 30);  

  arc(300, 145, 230, 260, PI, 0);  
  rect(185, 100, 230, 50, 5);  

  

   //비니 레터링

  stroke(255); 

  strokeWeight(3);

  line(360, 140, 395, 135);  
  noStroke();  





  

   //눈썹 

  fill(30, 30, 30); 

  arc(265, 155, 40, 15, PI, TWO_PI);  
  arc(335, 155, 40, 15, PI, TWO_PI);  



//   눈 

  fill(255); 

  ellipse(265, 165, 40, 20);  

  ellipse(335, 165, 40, 20);  

  fill(0); 

  circle(265, 165, 12);  

  circle(335, 165, 12);  




  stroke(0);

  strokeWeight(2);

  noFill();

  

   //코 

  line(295, 205, 300, 215);  
  line(300, 215, 305, 215);  


   //입

  arc(300, 240, 50, 10, 0, PI);

}


/*
function mousePressed() {

  saveCanvas('myCaricature', 'png');

}
*/