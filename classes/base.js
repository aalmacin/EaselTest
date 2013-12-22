var Base = function() {
  WIDTH: 200,
  HEIGHT: 200,
  x: null,
  y: null,
  color: null,
  obj: new createjs.graphics.Shape(),
  init: function(x, y, color) {
    this.x = x;
    this.y = y;
    this.color = color;

    this.obj.graphics.beginFill(this.color).drawRect(this.x, this.y, this.WIDTH, this.HEIGHT);
  }
};
