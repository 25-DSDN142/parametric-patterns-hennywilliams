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
  background(240, 255, 240); //light honeydew green colour
}
var sunWidth = 190;
var Minisun1Position = 20;
var Minisun1length = 20;
var Minisun2Position = 170;
var Sunmiddle = 100;
let centerCircle = 150;
function my_symbol() { // do not rename this function. Treat this similarly to a Draw function
//rect(40 ,40, rect_width, rect_height);
//noStroke();
//fill(2000,200,250);
   //body
//ellipse(100, 100, 50, 40); // draws a circle 45 pixels accross at location 100 pixels accross and 100 pixels down
//triangle (85,100,50,75,50,125);
//triangle (90,50,120,110,90,100);

//arm
 //fill(240,200,250);
 //triangle (90,110,110,110,80,140);

 //sun and mini planets
 noStroke();
 fill(240,172,108) //tan orange main circle 
 ellipse(100,100,sunWidth,50);

 noStroke();
 fill(247,184,89); //middle of main circle
 ellipse(Sunmiddle,Sunmiddle,Sunmiddle,30);
 
 noStroke();
 fill(243,178,85);
 ellipse(100,centerCircle,centerCircle,30);

 noStroke();
 fill(240,174,80); 
ellipse(Minisun1Position,70,20,Minisun1length);//top left mini circle
ellipse(Minisun2Position,130,20,20);//bottom right mini circle

noStroke();
fill(244,160,85);
ellipse(70,70,10,10);
ellipse(130,130,10,10);

//clouds
//noStroke();
//fill(164,189,237, 150);
//ellipse(50,100,80,20);
//ellipse(65,120,70,20);
//ellipse(140,80,120,20);
}



