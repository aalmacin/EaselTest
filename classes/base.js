WIDTH: 200;
HEIGHT: 200;
var Base = function() {
  createjs.Sprite.call(this);
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
