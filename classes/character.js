var WIDTH = 50;
var HEIGHT = 150;

var Character = function(x, y, life, attack, defense, abilityPower, speed, spritesheet, defaultAnim) {
  createjs.Sprite.call(this, spritesheet, defaultAnim);
  this.x = x;
  this.y = y;
  this.life = life;
  this.attack = attack;
  this.defense = defense;
  this.abilityPower = abilityPower;
  this.speed = speed;
};

Character.prototype = new createjs.Sprite();

Character.prototype.moveUp = function() {
  this.y -= this.speed;
};

Character.prototype.moveDown = function() {
  this.y += this.speed;
};

Character.prototype.moveLeft = function() {
  this.x -= this.speed;
};

Character.prototype.moveRight = function() {
  this.x += this.speed;
};

