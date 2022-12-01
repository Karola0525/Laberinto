var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["6059a726-831e-434c-bde3-3cac01205922"],"propsByKey":{"6059a726-831e-434c-bde3-3cac01205922":{"name":"kid_8_1","sourceUrl":"assets/api/v1/animation-library/gamelab/2awrE08DyLIkEuVyTjHEgOP8jAg6gCCs/category_characters/kid_8.png","frameSize":{"x":239,"y":342},"frameCount":1,"looping":true,"frameDelay":2,"version":"2awrE08DyLIkEuVyTjHEgOP8jAg6gCCs","loadedFromSource":true,"saved":true,"sourceSize":{"x":239,"y":342},"rootRelativePath":"assets/api/v1/animation-library/gamelab/2awrE08DyLIkEuVyTjHEgOP8jAg6gCCs/category_characters/kid_8.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

//Creando al jugador sofía
var Sofia = createSprite(20,25,18,18);  
Sofia.shapeColor = "orange";

//Creando las paredes del laberinto (wall1 - wall2)
  var wall1 = createSprite(10,70,100,20);
  wall1.shapeColor = "brown";
  var wall2 = createSprite(100,50,20,100);
  wall2.shapeColor = "brown";
  var wall3 = createSprite(80,130,100,20);
  wall3.shapeColor = "brown";
  var wall4 = createSprite(50,250,20,100);
  wall4.shapeColor = "brown";
  var wall5 = createSprite(130,210,100,20);
  wall5.shapeColor = "brown";
  var wall6 = createSprite(10,250,100,20);
  wall6.shapeColor = "brown";
  var wall7 = createSprite(160,120,20,100);
  wall7.shapeColor = "brown";
  var wall8 = createSprite(150,20,100,20);
  wall8.shapeColor = "brown";
  var wall9 = createSprite(250,70,20,100);
  wall9.shapeColor = "brown";
  var wall10 = createSprite(270,150,100,20);
  wall10.shapeColor = "brown";
  var wall11 = createSprite(330,50,100,20);
  wall11.shapeColor = "brown";
  var wall12 = createSprite(340,125,20,100);
  wall12.shapeColor = "brown";
  var wall13 = createSprite(220,250,20,100);
  wall13.shapeColor = "brown";
  var wall14 = createSprite(330,210,150,20);
  wall14.shapeColor = "brown";
  var wall15 = createSprite(100,300,20,100);
  wall15.shapeColor = "brown";
  var wall16 = createSprite(180,310,100,20);
  wall16.shapeColor = "brown";
  var wall17 = createSprite(30,352,20,100);
  wall17.shapeColor = "brown";
  var wall18 = createSprite(175,352,20,100);
  wall18.shapeColor = "brown";
  var wall19 = createSprite(280,290,20,100);
  wall19.shapeColor = "brown";
  var wall20 = createSprite(350,270,120,20);
  wall20.shapeColor = "brown";
  var wall21 = createSprite(250,390,100,20);
  wall21.shapeColor = "brown";
  var wall22 = createSprite(330,370,20,100);
  wall22.shapeColor = "brown";
 

//Creando la copa
var cup=createSprite(395,375,10,50);
cup.shapeColor = "yellow";
  
function draw() {
  //Colocando el fondo en rosa
  background("pink");
  
    Sofia.velocityX=0;
    Sofia.velocityY=0;
   
  //Agregar movimiento a sofía con las teclas de flecha. 
    if (keyDown("UP_ARROW")) 
    {
        Sofia.velocityX=0;
        Sofia.velocityY=-4;
    }
    if (keyDown(DOWN_ARROW)) 
    {
        Sofia.velocityX=0;
        Sofia.velocityY=4;
    }
    if (keyDown(LEFT_ARROW)) 
    {
        Sofia.velocityX=-4;
        Sofia.velocityY=0;
    }
    if (keyDown(RIGHT_ARROW)) 
    {
        Sofia.velocityX=4;
        Sofia.velocityY=0;
    }


//Creando edgesprites para parar el movimiento de sofía
createEdgeSprites();
//Sofia.bounceOff(edges);




  Sofia.bounceOff(wall1);
Sofia.bounceOff(wall2);
Sofia.bounceOff(wall3);
Sofia.bounceOff(wall4);
Sofia.bounceOff(wall5);
Sofia.bounceOff(wall6);
Sofia.bounceOff(wall7);
Sofia.bounceOff(wall8);
Sofia.bounceOff(wall9);
Sofia.bounceOff(wall10);
Sofia.bounceOff(wall11);
Sofia.bounceOff(wall12);
Sofia.bounceOff(wall13);
Sofia.bounceOff(wall14);
Sofia.bounceOff(wall15);
Sofia.bounceOff(wall16);
Sofia.bounceOff(wall17);
Sofia.bounceOff(wall18);
Sofia.bounceOff(wall19);
Sofia.bounceOff(wall20);
Sofia.bounceOff(wall21);
Sofia.bounceOff(wall22);


  if ( Sofia.collide(cup))  
{
  background("white")

  }
    drawSprites();

}

























// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
