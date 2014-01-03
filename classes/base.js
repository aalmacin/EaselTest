var BASE_WIDTH = 200;
var BASE_HEIGHT = 200;
var BASE_LIFE = 400;
var Base = function(spritesheet, x, y) {
  createjs.Sprite.call(this, spritesheet, 'highLife');
  this.life = BASE_LIFE;
  this.x = x;
  this.y = y;
};

Base.prototype = new createjs.Sprite();
/*

  this.base = new createjs.bitmap('assets/images/base.png');
  this.enemy_base = new createjs.bitmap('assets/images/base.png');

  var base_image = this.base.image;
  var enemy_base_image = this.enemy_base.image;
  console.log(base_image.constructor.name);
  for (a in base_image ) {
  }

  //console.log(base_image);

  //this.obj.addChild(this.base);
  this.addChild(this.enemy_base);
*/
