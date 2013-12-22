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
  createjs.Tween.get(this).to({y: this.y - this.speed}, 1000).call(backToNormal);
  function backToNormal() {
    console.log('back');
  }
};

Character.prototype.moveDown = function() {
  createjs.Tween.get(this).to({y: this.y + this.speed}, 1000).call(backToNormal);
  function backToNormal() {
    console.log('back');
  }
};

Character.prototype.moveLeft = function() {
  createjs.Tween.get(this).to({x: this.x - this.speed}, 1000).call(backToNormal);
  function backToNormal() {
    console.log('back');
  }
};

Character.prototype.moveRight = function() {
  createjs.Tween.get(this).to({x: this.x + this.speed}, 1000).call(backToNormal);
  function backToNormal() {
    console.log('back');
  }
};

