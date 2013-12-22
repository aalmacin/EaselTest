var KEY_Q = 81;
var KEY_W = 87;
var KEY_E = 69;
var KEY_R = 82;
var KEY_S = 83;
var KEY_A = 65;
var KEY_D = 68;

var KEY_ONE = 49;
var KEY_TWO = 50;
var KEY_THREE = 51;
var KEY_FOUR = 52;

var KEY_J = 74;
var KEY_K = 75;
var KEY_L = 76;
var KEY_SEMICOLON = 186;

var MAIN_STAGE = 'mainStage';
var BACKGROUND_PATH = 'assets/images/gameArea.png';

$(document).ready(function() {
  var stage = new Stage(MAIN_STAGE, BACKGROUND_PATH);
  createjs.Ticker.addEventListener('tick', stage);
  var base = new Base();
  var enemy_base = new Base();
  var char1Data = {
    framerate: 400,
    images: ['assets/images/char1.png'],
    frames: {width: 50, height: 150},
    animations: {kick: [0, 1], attack: [2,3]}
  };
  var char1Spritesheet = new createjs.SpriteSheet(char1Data);
  var char1 = new Character(0, 0, 100, 20, 20, 40, 30, char1Spritesheet, 'attack');
  stage.addChild(char1);
  stage.canvas.addEventListener('click', handleClick);

  function handleClick(e) {
    //char1.targetX = e.x;
    //char1.targetY = e.y;
    console.log(char1);
  }

  var keydown = function (e) {
    console.log(e.which);
    switch(e.which) {
      case KEY_A:
        char1.moveLeft();
        console.log(char1);
        break;
      case KEY_D:
        char1.moveRight();
        console.log(char1);
        break;
      case KEY_W:
        char1.moveUp();
        console.log(char1);
        break;
      case KEY_S:
        char1.moveDown();
        console.log(char1);
        break;
    }
  };

  var keyup = function (e) {
    switch(e.which) {
      case KEY_ONE:
        console.log('1');
        break;
      case KEY_TWO:
        console.log('2');
        break;
      case KEY_THREE:
        console.log('3');
        break;
      case KEY_FOUR:
        console.log('4');
        break;
    }
  };

  $(window).keydown(keydown);
  $(window).keyup(keyup);
});
