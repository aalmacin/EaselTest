var WIDTH = 50;
var HEIGHT = 150;
var MOVEMENT_TARGET = 50;
var MAX_SPEED = 1000;

var Character = function(x, y, life, attack, defense, abilityPower, speed, spritesheet, defaultAnim) {
  createjs.Sprite.call(this, spritesheet, defaultAnim);
  this.x = x;
  this.y = y;
  this.life = life;
  this.attack = attack;
  this.defense = defense;
  this.abilityPower = abilityPower;
  this.speed = MAX_SPEED - (speed * 10);
  console.log(this.speed);
};

Character.prototype = new createjs.Sprite();

Character.prototype.moveUp = function() {
  createjs.Tween.get(this, {override: true}).to({y: this.y - MOVEMENT_TARGET}, this.speed).call(backToNormal);
  function backToNormal() {
    console.log('back');
  }
};

Character.prototype.moveDown = function() {
  createjs.Tween.get(this, {override: true}).to({y: this.y + MOVEMENT_TARGET}, this.speed).call(backToNormal);
  function backToNormal() {
    console.log('back');
  }
};

Character.prototype.moveLeft = function() {
  createjs.Tween.get(this, {override: true}).to({x: this.x - MOVEMENT_TARGET}, this.speed).call(backToNormal);
  function backToNormal() {
    console.log('back');
  }
};

Character.prototype.moveRight = function() {
  createjs.Tween.get(this, {override: true}).to({x: this.x + MOVEMENT_TARGET}, this.speed).call(backToNormal);
  function backToNormal() {
    console.log('back');
  }
};

