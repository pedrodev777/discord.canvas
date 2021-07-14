const canvas = require('canvas');

class createWelcomeCard {
  
  constructor(...d) {
    
    this.init(...d);
    
  }
  
  init() {
    
    this.canvas = canvas.createCanvas(1100, 500);
    this.ctx = this.canvas.getContext("2d");
    
    this.ctx.fillStyle = "#23272a";
    this.ctx.fillRect(0,0,canvas.width,canvas.height);
    
    // Support for discord attachments/images.
    
    this.type = "Buffer";
    this.data = this.canvas.toBuffer().toJSON().data;
    
  }
}

module.exports = createWelcomeCard;