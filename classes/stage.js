var WIDTH = 768;
var HEIGHT = 1024;
function Stage(canvasID, bgImageFilename){
  createjs.Stage.call(this, canvasID);
  this.backgroundImage = new createjs.Bitmap(bgImageFilename);
  this.canvas.width = WIDTH;
  this.canvas.height = HEIGHT;
  this.addChild(this.backgroundImage);
}

Stage.prototype = new createjs.Stage();
