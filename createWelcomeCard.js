const Canvas = require('canvas');

async function createWelcomeCard() {
  this.canvas = Canvas.createCanvas(1100, 500);
  this.ctx = this.canvas.getContext("2d")
  
  return this.canvas.toBuffer();
};

module.exports = createWelcomeCard.bind(Object.create(null));