canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
var background_image="racing_track.jpg"; 
 rover_width = 120;
 rover_height = 70;
 car1_image="car1.png";
 car1_x=10;
 car1_y=10;

 rover_width = 120;
 rover_height = 70;
 car2_image="car2.png";
 car1_x=10;
 car1_y=100;


 function add()
 {
    background_imgTag = new Image();
    background_imgTag.onload = uploadBackground;
    background_imgTag.src = background_image;

    rover_imgTag = new Image();
    rover_imgTag.onload = uploadrover;
    rover_imgTag.src = rover_image;
 }

 function uploadBackground()
 {
    ctx.drawImage(background_imgTag, 0, 0, canvas.width, canvas.height);
 }

 function uploadrover()
 {
     ctx.drawImage(rover_imgTag,rover_x,rover_y,rover_width,rover_height)
 }

 window.addEventListener("keydown", my_keydown);

 function my_keydown(e)
 {
    keyPressed = e.keyCode;
    console.log(keyPressed);
    if(keyPressed == '38') { up();
         console.log("up");
         }

         if(keyPressed == '40') { down();
             console.log("down");
             }

             if(keyPressed == '37') { left();
                 console.log("left");
                 }  

                 if(keyPressed == '39') { right();
                     console.log("right");
                     }

 }

 function up()
  {
       if(rover_y >=0)
        {
             car1_y = car1_y - 10;
              console.log("When up arrow is pressed, x = " + car1_x + " | y = " +car1_y);
               uploadBackground();
                uploadrover();

                car2_y = car2_y - 100;
              console.log("When up arrow is pressed, x = " + car2_x + " | y = " +car2_y);
               uploadBackground();
                uploadrover();
             }
} 

function down()
{
if(car1_y <=500)
{
car1_y =car1_y + 10;
console.log("When down arrow is pressed, x = " + car1_x + " | y = " +car1_y);
uploadBackground();
uploadrover();
}
}

{
   if(car2_y <=500)
   {
   car2_y =car2_y + 100;
   console.log("When down arrow is pressed, x = " + car2_x + " | y = " +car2_y);
   uploadBackground();
   uploadrover();
   }
   }
                         
function left()
{
if(car1_x >= 0) { car1_x =car1_x - 10;
console.log("When left arrow is pressed, x = " + car1_x + " | y = " +car1_y);
uploadBackground();
uploadrover();
}
}

{
   if(car2_x >= 0) { car2_x =car2_x - 100;
   console.log("When left arrow is pressed, x = " + car1_x + " | y = " +car1_y);
   uploadBackground();
   uploadrover();
   }
   }

function right()
{ 
   if(car1_x <= 700) 
   { car1_x =car1_x + 10;
       console.log("When right arrow is pressed, x = " + car1_x + " | y = " +car1_y);
        uploadBackground();
         uploadrover();
       }
       }

       { 
         if(car2_x <= 700) 
         { car2_x =car2_x + 100;
             console.log("When right arrow is pressed, x = " + car2_x + " | y = " +car2_y);
              uploadBackground();
               uploadrover();
             }
             }