// create a variable to hold our world object
var world;

// create variables to hold our markers
var markerZb;
var hiroMarker,letter_i;
var pika_view;
var a_marker,b_marker,c_marker,d_marker;
var zbPosition, hiroPosition, pikaPosition,aPosition,bPosition,cPosition,dPosition,iPosition;
var correct = [];
var number = 0;
// keep track of the position of our character
var x1 = 0;
var y1 = 0;
var x2 = 30;
var y2 = 0;
var x3 = 40;
var y3 = 100;
var x4 = 60;
var y4 = 0;
var x5 = 100;
var y5 = 100;
var x6 = 150;
var y6 = 100;
var x7 = 60;
var y7 = 100;
var x8 = 200;
var y8 = 100;


// artwork
var artwork1;
var artwork2;
var artwork3;
var artwork4;
var artwork5;
var artwork6;
var artwork7;
var artwork8;



// load in p5 artwork
function preload() {
  artwork1 = loadImage("images/2.png");
  artwork2 = loadImage('images/3.png');
  artwork3 = loadImage('images/4.png');
  artwork4 = loadImage('images/5.png');
  artwork5= loadImage('images/6.png');
  artwork6 = loadImage('images/7.png');
  artwork7 = loadImage('images/8.png');
  artwork8 = loadImage('images/9.png');
}

function setup() {
  // create our world (this also creates a p5 canvas for us)
  world = new World('ARScene');

  // grab a reference to our two markers that we set up on the HTML side (connect to it using its 'id')
  hiroMarker = world.getMarker('hiro');
  markerZb = world.getMarker('zb');
  pika_view = world.getMarker('pika_view');
  a_marker = world.getMarker('a_marker');
  b_marker= world.getMarker('b_marker');
  c_marker = world.getMarker('c_marker');
  d_marker = world.getMarker('d_marker');
  letter_i = world.getMarker('letter_i');

  artwork1.resize(250,250)
  artwork2.resize(250,250);
  artwork3.resize(250,250);
  artwork4.resize(250,250);
  artwork5.resize(250,250);
  artwork6.resize(250,250);
  artwork7.resize(250,250);
  artwork8.resize(250,250);
  for(var i  =0; i<8;i++){
    correct[i]=false;
  }

}


function draw() {


  // erase the background
  world.clearDrawingCanvas();

  strokeWeight(4);
  rectMode(CENTER)
  noFill()
  rect(200,200, 150, 150);
  rect(350,200, 150, 150);
  rect(500,200,150, 150);
  rect(650,200, 150, 150);
  rect(200,350, 150, 150);
  rect(350,350, 150, 150);
  rect(500,350, 150, 150);
  rect(650,350, 150, 150);

  // use the markers as positional controllers
  if (markerZb.isVisible() == true) {
    // get the position of this marker
   zbPosition = markerZb.getScreenPosition();

    // set the character's position using this info
    x1 = zbPosition.x;
    y1 = zbPosition.y;
  }
  if (hiroMarker.isVisible() == true) {
    // get the position of this marker
    hiroPosition = hiroMarker.getScreenPosition();

    // set the character's position using this info
    x2 = hiroPosition.x;
    y2= hiroPosition.y;
  }
  if (pika_view.isVisible() == true) {
    // get the position of this marker
     pikaPosition = pika_view.getScreenPosition();

    // set the character's position using this info
    x3 = pikaPosition.x;
    y3= pikaPosition.y;
  }
  if (a_marker.isVisible() == true) {
    // get the position of this marker
   aPosition = a_marker.getScreenPosition();

    // set the character's position using this info
    x4 = aPosition.x;
    y4 = aPosition.y;
  }
  if (b_marker.isVisible() == true) {
    // get the position of this marker
  bPosition = b_marker.getScreenPosition();

    // set the character's position using this info
    x5 = bPosition.x;
    y5 = bPosition.y;
  }
  if (c_marker.isVisible() == true) {
    // get the position of this marker
    cPosition = c_marker.getScreenPosition();

    // set the character's position using this info
    x6 = cPosition.x;
    y6 = cPosition.y;
  }
  if (d_marker.isVisible() == true) {
    // get the position of this marker
    dPosition = d_marker.getScreenPosition();

    // set the character's position using this info
    x7 = dPosition.x;
    y7 = dPosition.y;
  }
  if (letter_i.isVisible() == true) {
    // get the position of this marker
   iPosition = letter_i.getScreenPosition();

    // set the character's position using this info
    x8 = iPosition.x;
    y8 = iPosition.y;
  }




  // draw the character here (even if the marker isn't visible)
  imageMode(CENTER);
  image(artwork1, x1, y1);
  image(artwork2, x2, y2);
  image(artwork3, x3, y3);
  image(artwork4, x4, y4);
  image(artwork5, x5, y5);
  image(artwork6, x6, y6);
  image(artwork7, x7, y7);
  image(artwork8, x8, y8);


  var d1 = dist(x1, y1, 200, 200 );
  if(d1 <=20){
    correct[0]= true;
  }else{correct[1]= false;}

  var d2 = dist(x2, y2, 350, 200 );
  if(d2 <=20){
    correct[1]= true;
  }else{correct[1]= false;}

  var d3 = dist(x3, y3, 500, 200 );
  if(d3 <=20){
    correct[2]= true;
  }else{correct[2]= false;}

  var d4 = dist(x4, y4, 650, 200 );
  if(d4 <=20){
    correct[3]= true;
  }else{correct[3]= false;}

  var d5 = dist(x5, y5, 200, 350 );
  if(d5 <=20){
    correct[4]= true;
  }else{correct[4]= false;}

  var d6 = dist(x6, y6, 350, 350 );
  if(d6 <=20){
    correct[5]= true;
  }else{correct[5]= false;}

  var d7 = dist(x7, y7, 500, 350 );
  if(d7 <=20){
    correct[6]= true;
  }else{correct[6]= false;}

  var d8 = dist(x8, y8, 650, 350 );
  if(d8 <=20){
    correct[7]= true;
  }else{correct[7]= false;}


  for(var i  =0; i<8;i++){
    if(correct[i]== true){
      number +=1;
    }
  }
  fill(255,255,255,150)
  rect(500,455,400,60)

  textSize(30);
  textAlign(CENTER);
  fill(0)
  text("Correctly placed "+ number +" pieces!",500,460)

  if(number ==8){
    textSize(50);
    textAlign(CENTER);
    fill(255,255,50)
    text("You win!!!!!",200,200)
  }
  number =0;






}
