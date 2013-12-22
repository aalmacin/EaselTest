var WIDTH = 100;
var HEIGHT = 50;
var MOVEMENT_SPEED = 10;

var Character = function(x, y, life, attack, defense, abilityPower, speed) {
  createjs.Sprite.call(this);
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
