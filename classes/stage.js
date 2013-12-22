var WIDTH = 768;
var HEIGHT = 1024;
var KEY_W = 87;
var KEY_S = 83;
var KEY_A = 65;
var KEY_D = 68;

var KEY_J = 74;
var KEY_K = 75;
var KEY_L = 76;
var KEY_SEMICOLON = 186;
function Stage(canvasID, imageFilename){
  this.image = new createjs.Bitmap(imageFilename);
  this.obj = new createjs.Stage(canvasID);
  this.obj.canvas.width = WIDTH;
  this.obj.canvas.height = HEIGHT;
  this.obj.addChild(this.image);

  var base_image = new Image();
  base_image.src = 'assets/images/base.png';

  var enemy_base_image = new Image();
  enemy_base_image.src = 'assets/images/base.png';
  this.base = null;
  this.enemy_base = null;

  var parentObj = this;
  base_image.onload = function(e) {
    parentObj.base = new createjs.Bitmap(e.target);
    parentObj.base.setBounds(0, 0, parentObj.base.image.width, parentObj.base.image.height);
  };

  enemy_base_image.onload = function(e) {
    parentObj.enemy_base = new createjs.Bitmap(e.target);
    parentObj.enemy_base.setBounds(0, 0, parentObj.enemy_base.image.width, parentObj.enemy_base.image.height);
  };
  console.log(parentObj.base);

  //this.base.x = (this.obj.canvas.width / 2);
  //this.base.y = 0;

  //this.enemy_base.x = (this.obj.canvas.width / 2);
  //this.enemy_base.y = (this.obj.canvas.height - this.enemy_base.image.height);
  console.log(this.base);
  //console.log(this.enemy_base.image);
  //console.log(this.enemy_base.image.height);

  this.obj.addChild(this.base);
  this.obj.addChild(this.enemy_base);

  this.image.addEventListener('click', this.onClick);
  createjs.Ticker.addEventListener('tick', this.obj);
  $(window).keydown(
    function (e) {
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
    }
  );
  $(window).keyup(
    function (e) {
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
    }
  );
}
