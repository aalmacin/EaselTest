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
  $('#main').hide();
  $.getJSON('data/character.json', function(data) {
    var selectField = $('#champSelect select');
    var buttonField = $('#champSelect button');
    $(data).each(function() {
      selectField.append($('<option value="' + this.id + '">' + this.Name + '</option>'));
    });
    buttonField.click(function() {
      $(data).each(function() {
        if (this.id == selectField.val()) startGame(this);
      });
      $('#main').show();
      $('#champSelect').remove();
    });
  });
});

function startGame(char1Data) {
  var stage = new Stage(MAIN_STAGE, BACKGROUND_PATH);
  createjs.Ticker.addEventListener('tick', stage);
  var baseSpriteSheetData = {
    "framerate": 3,
    "images": ["assets/images/base.png"],
    "frames": {
      "width": 200,
      "height": 200
    },
    "animations": {
      "highLife": [0]
    }
  }
  var baseSpriteSheet = new createjs.SpriteSheet(baseSpriteSheetData);
  var base = new Base(baseSpriteSheet, (STAGE_WIDTH / 2) - (baseSpriteSheetData.frames.width / 2), (STAGE_HEIGHT - (baseSpriteSheetData.frames.height)));
  var enemy_base = new Base(baseSpriteSheet, (STAGE_WIDTH / 2) - (baseSpriteSheetData.frames.width / 2), 0);
  stage.addChild(base);
  stage.addChild(enemy_base);
  var char1 = null;
  var char1SpriteSheet = new createjs.SpriteSheet(char1Data.spritesheetData);
  char1 = new Character(
    0,
    0,
    char1Data.life,
    char1Data.attack,
    char1Data.defense,
    char1Data.abilityPower,
    char1Data.speed,
    char1SpriteSheet,
    char1Data.spritesheetData.animations.normal
  );
  stage.addChild(char1);
  stage.canvas.addEventListener('mousedown', handleMouseDown);
  stage.canvas.addEventListener('mouseup', handleMouseUp);

  function handleMouseDown(e) {
    char1.doAttack();
  }


  function handleMouseUp(e) {
    char1.backToNormal();
  }

  var keydown = function (e) {
    switch(e.which) {
      case KEY_A:
        char1.moveLeft();
        break;
      case KEY_D:
        char1.moveRight();
        break;
      case KEY_W:
        char1.moveUp();
        break;
      case KEY_S:
        char1.moveDown();
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

  function wheel(e) {
    e.preventDefault();
  }
  if (window.addEventListener) window.addEventListener('DOMMouseScroll', wheel, false);
  window.onmousewheel = document.onmousewheel = wheel;
}
