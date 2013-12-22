var KEY_Q = 81;
var KEY_W = 87;
var KEY_E = 69;
var KEY_R = 82;
var KEY_S = 83;
var KEY_A = 65;
var KEY_D = 68;

var KEY_J = 74;
var KEY_K = 75;
var KEY_L = 76;
var KEY_SEMICOLON = 186;

var MAIN_STAGE = 'mainStage';
var BACKGROUND_PATH = 'assets/images/gameArea.png';

/*
var keydown = function (e) {
  switch(e.which) {
    case KEY_J:
      console.log('J');
      break;
    case KEY_K:
      console.log('K');
      break;
    case KEY_L:
      console.log('L');
      break;
    case KEY_SEMICOLON:
      console.log(';');
      break;
  }
};
*/

var keyup = function (e) {
  switch(e.which) {
    case KEY_Q:
      console.log('Q');
      break;
    case KEY_W:
      console.log('W');
      break;
    case KEY_E:
      console.log('E');
      break;
    case KEY_R:
      console.log('R');
      break;
  }
};

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
  console.log(char1Spritesheet);
  var char1 = new Character(0, 0, 100, 20, 20, 40, 30, char1Spritesheet, 'attack');
  stage.addChild(char1);

  //$(window).keydown(keydown);
  $(window).keyup(keyup);
});
