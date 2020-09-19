var fixedRect, movingRect
function setup() {
 createCanvas(1600, 400);
 fixedRect=createSprite(100, 200, 50, 70);
 movingRect=createSprite(800, 200, 70, 50);
 fixedRect.shapeColor="green";
  movingRect.shapeColor="green";
   fixedRect.debug=true;
    movingRect.debug=true;
    movingRect.velocityX=-5;
    fixedRect.velocityX=5;
   }
    function draw() 
    { background(0);
movingRect.x=mouseX;
        movingRect.y=mouseY;
         if(movingRect.x-fixedRect.x<fixedRect.width/2+movingRect.width/2&&fixedRect.x-movingRect.x<fixedRect.width/2+movingRect.width/2
          
          ){
     movingRect.shapeColor="red";
          fixedRect.shapeColor="red";
         }
          else if(movingRect.y-fixedRect.y<fixedRect.height/2+movingRect.height/2&&fixedRect.y-movingRect.y<fixedRect.height/2+movingRect.height/2){ 
      
          movingRect.shapeColor="green";
           fixedRect.shapeColor="green";
           }
            drawSprites(); }