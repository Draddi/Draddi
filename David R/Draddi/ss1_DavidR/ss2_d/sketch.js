function setup() {
  //David R/sunset
  //I start with the circles and making them smaller. 
  //Then it remind me of frames of the sunsetting, like cells from a animations.
  //Also I just really like the ocean.
  createCanvas(500, 500);}
  function draw(){
    let mx=mouseX +80;//+ 80 from mouseX
  background(180,50,150);//sky
  fill(200,180,0);
  //circle(x,y,diameter) 
  circle(250,100,100);//sun1
  fill(200,160,0);
  circle(250,140,80);//sun2
  fill(200,120,0);
  circle(250,180,60);//sun3
  fill(200,100,0);
  circle(250,220,40);//sun4
  fill(200,80,0);
  circle(250,260,20);//sun5
  //fill(red,green,blue)
  fill(0,0,255);//fill has to be above the shape
  //rect(x,y,width,height)
  rect(0,260,500,250);//water
  //strokeWeight(it has to be above line)
  strokeWeight(5);
  //Line(x1,y1,x2,y2)
  line(0,260,1000,260);
  fill(150,110,100);
  rect(mouseX,300,100,10);//boat
  strokeWeight(1);
  fill(255,255,255);
  //triangle(x1,y1,x2,y2,x3,y3)
  triangle(mouseX,300,mx,200,mx,250);//sail
  strokeWeight(2);
  line(mx,250,mx,300);//pole
  }
