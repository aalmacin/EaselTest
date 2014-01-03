var STAGE_WIDTH = 1024;
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

  this.backtonormal = new createjs.Event('backtonormal');
  this.addEventListener('backtonormal', this.doBackToNormal);

  this.addEventListener('tick', this.handleTick);
};

Character.prototype = new createjs.Sprite();

Character.prototype.handleTick = function(e) {
  window.scrollTo(0, e.currentTarget.y);
  e.currentTarget.setBounds(e.currentTarget.x, e.currentTarget.y, e.currentTarget.spriteSheet._frameWidth, e.currentTarget.spriteSheet._frameHeight);
  var statHolder = $('.statHolder');
  statHolder.find('.x span').html(Math.round(e.currentTarget.x));
  statHolder.find('.y span').html(Math.round(e.currentTarget.y));
  statHolder.find('.life span').html(e.currentTarget.life);
  statHolder.find('.attack span').html(e.currentTarget.attack);
  statHolder.find('.defense span').html(e.currentTarget.defense);
  statHolder.find('.abilityPower span').html(e.currentTarget.abilityPower);
  statHolder.find('.speed span').html(e.currentTarget.speed);
}

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

Character.prototype.doAttack = function() {
  this.gotoAndPlay('attack');

  var that = this;
  setTimeout(function () {
    that.dispatchEvent(that.backtonormal);
  }, 100);

};

Character.prototype.backToNormal = function() {
  this.gotoAndPlay('normal');
};

Character.prototype.doBackToNormal = function(e) {
  e.target.backToNormal();
};
