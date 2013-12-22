var KEY_W = 87;
var KEY_S = 83;
var KEY_A = 65;
var KEY_D = 68;

var KEY_J = 74;
var KEY_K = 75;
var KEY_L = 76;
var KEY_SEMICOLON = 186;

var MAIN_STAGE = 'mainStage';
var BACKGROUND_PATH = 'assets/images/gameArea.png';

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

var keyup = function (e) {
  switch(e.which) {
    case KEY_W:
      console.log('W');
      break;
    case KEY_S:
      console.log('S');
      break;
    case KEY_A:
      console.log('A');
      break;
    case KEY_D:
      console.log('D');
      break;
  }
};

$(document).ready(function() {
  var stage = new Stage(MAIN_STAGE, BACKGROUND_PATH);
  createjs.Ticker.addEventListener('tick', stage);
  var base = new Base();
  var enemy_base = new Base();

  $(window).keydown(keydown);
  $(window).keyup(keyup);
});
