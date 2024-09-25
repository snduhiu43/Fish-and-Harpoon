

var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["1a48079b-1dc0-4cbf-bee0-5d69bb73d301","557df4b6-d3ea-4357-aa8a-b2e75a2d0fb8","a51625be-19a2-4213-82ee-c419109e7f13","a86a2c32-7af6-4668-b094-7d8515e9e206","fc36a3b4-a397-42bc-8cde-99ffa37f6100","0df7696a-2cbc-46ad-9291-1e1899132332","fdf01157-4274-4e21-9318-dabc15b018ab","31ff8f28-7df4-4273-b6cf-0d957d860226","344f529a-3f8c-438d-a25e-9341d9eee89d"],"propsByKey":{"1a48079b-1dc0-4cbf-bee0-5d69bb73d301":{"name":"underwater","sourceUrl":"assets/api/v1/animation-library/gamelab/XN..6b7PQhL5yW3FILYOJpCswKVh.x95/category_backgrounds/background_underwater.png","frameSize":{"x":400,"y":400},"frameCount":1,"looping":true,"frameDelay":3,"version":"XN..6b7PQhL5yW3FILYOJpCswKVh.x95","categories":["backgrounds"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":400},"rootRelativePath":"assets/api/v1/animation-library/gamelab/XN..6b7PQhL5yW3FILYOJpCswKVh.x95/category_backgrounds/background_underwater.png"},"557df4b6-d3ea-4357-aa8a-b2e75a2d0fb8":{"name":"fish","sourceUrl":"assets/api/v1/animation-library/gamelab/066lZ_2XTSq_wyVGHy06qDN59Z5QPIkA/category_animals/fish.png","frameSize":{"x":128,"y":128},"frameCount":1,"looping":true,"frameDelay":2,"version":"066lZ_2XTSq_wyVGHy06qDN59Z5QPIkA","categories":["animals"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":128,"y":128},"rootRelativePath":"assets/api/v1/animation-library/gamelab/066lZ_2XTSq_wyVGHy06qDN59Z5QPIkA/category_animals/fish.png"},"a51625be-19a2-4213-82ee-c419109e7f13":{"name":"rock","sourceUrl":"assets/api/v1/animation-library/gamelab/53DPXIvJicS9m6UN5iBQhDEdGho5iPvk/category_obstacles/rock.png","frameSize":{"x":108,"y":239},"frameCount":1,"looping":true,"frameDelay":2,"version":"53DPXIvJicS9m6UN5iBQhDEdGho5iPvk","categories":["obstacles"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":108,"y":239},"rootRelativePath":"assets/api/v1/animation-library/gamelab/53DPXIvJicS9m6UN5iBQhDEdGho5iPvk/category_obstacles/rock.png"},"a86a2c32-7af6-4668-b094-7d8515e9e206":{"name":"snail","sourceUrl":"assets/api/v1/animation-library/gamelab/Q4i4dbFJQrn230HqJFJu4LbdheAdddJO/category_animals/snail.png","frameSize":{"x":62,"y":42},"frameCount":2,"looping":true,"frameDelay":2,"version":"Q4i4dbFJQrn230HqJFJu4LbdheAdddJO","categories":["animals"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":124,"y":42},"rootRelativePath":"assets/api/v1/animation-library/gamelab/Q4i4dbFJQrn230HqJFJu4LbdheAdddJO/category_animals/snail.png"},"fc36a3b4-a397-42bc-8cde-99ffa37f6100":{"name":"crab","sourceUrl":"assets/api/v1/animation-library/gamelab/k76J3fnUizuR.cly1ePZrTD5O0KW3BIz/category_animals/crab.png","frameSize":{"x":288,"y":191},"frameCount":1,"looping":true,"frameDelay":2,"version":"k76J3fnUizuR.cly1ePZrTD5O0KW3BIz","categories":["animals"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":288,"y":191},"rootRelativePath":"assets/api/v1/animation-library/gamelab/k76J3fnUizuR.cly1ePZrTD5O0KW3BIz/category_animals/crab.png"},"0df7696a-2cbc-46ad-9291-1e1899132332":{"name":"fly","sourceUrl":"assets/api/v1/animation-library/gamelab/5_Mj297CD1ZOpafuDnOOtqCqIHeQVxg./category_animals/fly.png","frameSize":{"x":67,"y":47},"frameCount":2,"looping":true,"frameDelay":2,"version":"5_Mj297CD1ZOpafuDnOOtqCqIHeQVxg.","categories":["animals"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":134,"y":47},"rootRelativePath":"assets/api/v1/animation-library/gamelab/5_Mj297CD1ZOpafuDnOOtqCqIHeQVxg./category_animals/fly.png"},"fdf01157-4274-4e21-9318-dabc15b018ab":{"name":"turtle","sourceUrl":"assets/api/v1/animation-library/gamelab/.VAoZg.mBSE5KfYeq6Q44cUk8RhGhBYN/category_animals/turtle.png","frameSize":{"x":300,"y":146},"frameCount":1,"looping":true,"frameDelay":2,"version":".VAoZg.mBSE5KfYeq6Q44cUk8RhGhBYN","categories":["animals"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":300,"y":146},"rootRelativePath":"assets/api/v1/animation-library/gamelab/.VAoZg.mBSE5KfYeq6Q44cUk8RhGhBYN/category_animals/turtle.png"},"31ff8f28-7df4-4273-b6cf-0d957d860226":{"name":"arrow","sourceUrl":null,"frameSize":{"x":128,"y":128},"frameCount":1,"looping":true,"frameDelay":12,"version":"R.tfNp_CXJfwOpT1VbrV.FH1ekx1w8Gt","categories":["tools"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":128,"y":128},"rootRelativePath":"assets/31ff8f28-7df4-4273-b6cf-0d957d860226.png"},"344f529a-3f8c-438d-a25e-9341d9eee89d":{"name":"fishfood","sourceUrl":null,"frameSize":{"x":100,"y":100},"frameCount":1,"looping":true,"frameDelay":12,"version":"dK8h7xM9URSvfBD135yk5KT74wyQRWha","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":100},"rootRelativePath":"assets/344f529a-3f8c-438d-a25e-9341d9eee89d.png"}}};
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

// Create your variables here
//Create your sprites here

var fish = createSprite(50, 250);
fish.setAnimation("fish");

var arrow = createSprite(200, 40);
arrow.setAnimation("arrow");

var fishfood = createSprite(100, 150);
fishfood.setAnimation("fishfood");

var score = 0;

function draw() {
  // draw background
  background("skyblue");
  
  noFill();
  stroke("white");
  ellipse(randomNumber(25, 350), randomNumber(25, 350), 25, 25);
  
  // update sprites
  arrow.scale = 0.7;
  arrow.rotation = -45;
  arrow.velocityY = 1;
  arrow.setCollider("rectangle", 0, 0, 150, 30, 135);
  arrow.debug = false;
  if (arrow.y > 350) {
    arrow.y = 40;
  }
  
  fishfood.scale = 1;
  fishfood.setCollider("rectangle", 0, 0, 25, 25, 90);
  fishfood.debug = false;
  
  fish.scale = 0.9;
  fish.rotation = randomNumber(15, 20);
  fish.setCollider("rectangle", 0, 0, 100, 100, 75);
  fish.debug = false;
  if (fish.x > 350) {
    fish.x = 50;
  }

  if (keyDown("left")) {
    fish.x = fish.x - 3;
  }
  
  if (keyDown("right")) {
    fish.x = fish.x + 3;
  }
  
  if (keyDown("up")) {
    fish.y = fish.y - 3;
  }
  
  if (keyDown("down")) {
    fish.y = fish.y + 3;
  }
  
  if (fish.isTouching(fishfood)) {
    playSound("assets/category_points/vibrant_affirm_or_open.mp3", false);
    fishfood.x = randomNumber(50, 350);
    fishfood.y = randomNumber(40, 350);
    score = score + 10;
  }
  
  if (arrow.isTouching(fish)) {
    score = score - 5;
    arrow.x = randomNumber(5, 390);
    playSound("assets/category_accent/puzzle_game_accent_a_06.mp3", false);
  }
  
  if (arrow.isTouching(fishfood)) {
    arrow.x = randomNumber(5, 390);
  }
  
  fill("brown");
  noStroke();
  textSize(14);
  text("Escape the harpoon", 280, 12);
  text("and feed the fish", 280, 25);
  
  fill("black");
  noStroke();
  textSize(20);
  text("score:" + score, 10, 10, 100, 100);
  
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
