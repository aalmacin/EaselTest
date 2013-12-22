var WIDTH = 50;
var HEIGHT = 150;
var MOVEMENT_SPEED = 10;

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

Character.prototype.moveUp = function() {
  this.y -= MOVEMENT_SPEED;
};

Character.prototype.moveDown = function() {
  this.y += MOVEMENT_SPEED;
};

Character.prototype.moveLeft = function() {
  this.x -= MOVEMENT_SPEED;
};

Character.prototype.moveRight = function() {
  this.x += MOVEMENT_SPEED;
};

Character.prototype = new createjs.Sprite();
