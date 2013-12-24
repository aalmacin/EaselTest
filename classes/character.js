var STAGE_WIDTH = 768;
var STAGE_HEIGHT = 1024;
var SPRITE_WIDTH = 50;
var SPRITE_HEIGHT = 150;
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
  this.setBounds(this.x, this.y, SPRITE_WIDTH, SPRITE_HEIGHT);
};

Character.prototype = new createjs.Sprite();

Character.prototype.moveUp = function() {
  var destination = (this.y - MOVEMENT_TARGET);
  var boundsRect = this.getBounds();
  if (destination < 0) destination = 0;
  createjs.Tween.get(this, {override: true}).to({y: destination}, this.speed).call(backToNormal);
  boundsRect.x = this.x;
  boundsRect.y = this.y;
  function backToNormal() {
    console.log('back');
  }
};

Character.prototype.moveDown = function() {
  var destination = (this.y + MOVEMENT_TARGET);
  var boundsRect = this.getBounds();
  var limit = (STAGE_HEIGHT - SPRITE_HEIGHT);
  if (destination > limit) destination = limit;
  createjs.Tween.get(this, {override: true}).to({y: destination}, this.speed).call(backToNormal);
  boundsRect.x = this.x;
  boundsRect.y = this.y;
  function backToNormal() {
    console.log('back');
  }
};

Character.prototype.moveLeft = function() {
  var destination = (this.x - MOVEMENT_TARGET);
  var boundsRect = this.getBounds();
  if (destination < 0) destination = 0;
  createjs.Tween.get(this, {override: true}).to({x: destination}, this.speed).call(backToNormal);
  boundsRect.x = this.x;
  boundsRect.y = this.y;
  function backToNormal() {
    console.log('back');
  }
};

Character.prototype.moveRight = function() {
  var destination = (this.x + MOVEMENT_TARGET);
  var boundsRect = this.getBounds();
  var limit = (STAGE_WIDTH - SPRITE_WIDTH);
  if (destination > limit) destination = limit;
  createjs.Tween.get(this, {override: true}).to({x: destination}, this.speed).call(backToNormal);
  boundsRect.x = this.x;
  boundsRect.y = this.y;
  function backToNormal() {
    console.log('back');
  }
};

