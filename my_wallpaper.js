//your parameter variables go here!
let rect_width  = 20;
let rect_height = 30;


function setup_wallpaper(pWallpaper) {
  pWallpaper.output_mode(DEVELOP_GLYPH);
  //pWallpaper.output_mode(GRID_WALLPAPER);
  
  pWallpaper.resolution(FIT_TO_SCREEN);
  pWallpaper.show_guide(true); //set this to false when you're ready to print

  //Grid settings
  pWallpaper.grid_settings.cell_width  = 200;
  pWallpaper.grid_settings.cell_height = 200;
  pWallpaper.grid_settings.row_offset  = 50;
}

function wallpaper_background() {
  background(204, 157, 237); //light violet 
}
var ringNum = 4;
var sunWidth = 50;
var Minisun1Position = 40;
var Minisun1length = 20;
var Minisun2Position = 160;
var Sunmiddle = 100;
let centerCircle = 160;
function my_symbol() { // do not rename this function. Treat this similarly to a Draw function
//rect(40 ,40, rect_width, rect_height);
noStroke();
//fill(2000,200,250);
   //body
//ellipse(100, 100, 50, 40); // draws a circle 45 pixels accross at location 100 pixels accross and 100 pixels down
//triangle (85,100,50,75,50,125);

//movement detail behind planet
//fill(155,72,161,40);
//triangle(180,50,120,110,90,100);
//triangle(200,50,120,110,90,100);
//triangle(0,150,120,110,90,100);
//triangle(0,160,120,110,90,100);

//arm
 //fill(240,200,250);
 //triangle (90,110,110,110,80,140);

 //main and mini planets
 //fill(240,172,108) //yellow centre planet 
 fill(115, 72, 161)
 ellipse(100,100,sunWidth,50);
//  noStroke();
//  fill(247,164,89, 130); //centre planet ring
 //ellipse(100,100,130,35);
  push();
noFill();
// stroke(247,164,89, 130);
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
 
 noStroke();
 fill(189, 142, 222, 170); //bottom shadow
 ellipse(100,centerCircle,centerCircle,35);

 noStroke();
 fill(240,174,80, 150); 
ellipse(Minisun1Position,85,20,Minisun1length);//left mini planet
ellipse(Minisun2Position,115,20,20);//right mini planet
ellipse(130,35,30,30);//top mini planet

noStroke(); //white specks
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
ellipse(190,190,15,15);
ellipse(180,180,20,20);
ellipse(170,170,30,30);
ellipse(160,160,40,40);
ellipse(150,150,50,50);





//ellipse(-1,10,30,80);

//clouds
//noStroke();
//fill(164,189,237, 150);
//ellipse(50,100,80,20);
//ellipse(65,120,70,20);
//ellipse(140,80,120,20);
}



