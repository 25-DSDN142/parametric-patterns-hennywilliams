function setup_wallpaper(pWallpaper) {
  pWallpaper.output_mode(GRID_WALLPAPER); 
  pWallpaper.resolution(NINE_PORTRAIT);
  pWallpaper.show_guide(false);

  //Grid settings
  pWallpaper.grid_settings.cell_width  = 190;
  pWallpaper.grid_settings.cell_height = 100;
  pWallpaper.grid_settings.row_offset  = 70;
}

function wallpaper_background() {
  background(backGround, 157, 237); //light violet 
}

var ringNum = 2;
var sunWidth = 120;
var Minisun1Position = 180;
var Minisun1length = 50;
var Minisun2Position = 190;
let centerCircle = 70;
let backGround = 138;
function my_symbol() {

 //movement detail behind centre planet  
  noStroke();
fill(155,72,161,40);
triangle(180,50,120,110,90,100);
triangle(200,50,120,110,90,100);
triangle(0,150,120,110,90,100);
triangle(0,160,120,110,90,100);
 
 //purple centre planet 
 fill(115, 72, 161)
 ellipse(100,100,sunWidth,50);

 //centre planet rings
  push();
noFill();
 stroke(171, 118, 227, 130); 
 strokeWeight(4);
  translate(100, 100);
   rotate(-20)
 if (ringNum >= 1) {
  arc(0,0,130,35, -38, 218); //middle ring (in between the two other rings)
 } 
 if (ringNum >= 2) {
  arc(0,0,150,55, -140, 220); //outside ring
  if (ringNum >= 3) {
    arc(0,0,115,20, -19, 199); //inside ring
  }
 }
 pop();
 
 //middle bottom shadow
 noStroke();
 fill(189, 142, 222, 170); 
 ellipse(100,centerCircle,centerCircle,35);

 //mini planets
 noStroke();
 fill(240,174,80, 150); 
ellipse(Minisun1Position,85,20,Minisun1length);//left mini planet
ellipse(Minisun2Position,115,20,20);//right mini planet
ellipse(130,35,30,30);//top mini planet

//white speckles
noStroke(); 
fill(255, 255, 255);
ellipse(70,70,5,5);
ellipse(130,123,2,2);
ellipse(75,74,2,2,);
ellipse(135,127,5,5);

//light rays/clouds from top left
fill(212, 171, 255,75);
ellipse(10,10,15,15);
ellipse(20,20,20,20);
ellipse(30,30,30,30);
ellipse(40,40,40,40);
ellipse(50,50,50,50);

//light rays/clouds from bottom right
fill(212, 171, 255,75); 
ellipse(190,190,15,15);
ellipse(180,180,20,20);
ellipse(170,170,30,30);
ellipse(160,160,40,40);
ellipse(150,150,50,50);
}