const Canvas = require('canvas');

async function createWelcomeCard(data = {}) {
  const { avatar = 'https://cdn.discordapp.com/embed/avatars/4.png', BigText = "WELCOME"} = data;
  
  this.canvas = Canvas.createCanvas(1100, 500);
  this.ctx = this.canvas.getContext("2d");
  
  let image = await Canvas.loadImage(avatar);
  
  this.ctx.fillStyle = "#23272a";
  this.ctx.font = "bold 85px montserrat"
  
  this.ctx.fillRect(0,0,this.canvas.width,this.canvas.height);
  
  this.ctx.fillStyle = "#ffffff"
    
  this.ctx.fillText(BigText, this.canvas.width/3.5 , 380);
  
  this.ctx.strokeStyle = "#ffffff";
  
  this.ctx.lineWidth = 10;
  
  let circleSize = this.canvas.height / 4;
  
  this.ctx.save();
  this.ctx.beginPath();
  
  this.ctx.arc(this.canvas.width / 2, this.canvas.height / 3, circleSize, 0, Math.PI * 2, true);
  
  this.ctx.stroke();
  this.ctx.clip();
  this.ctx.beginPath();
  this.ctx.drawImage(
    image,
    
    // Location
    (this.canvas.width - circleSize * 2) / 2 ,
    (this.canvas.height - circleSize * 3) / 3,
    
    // Size
    circleSize * 2,
    circleSize * 2
  );
  
  this.ctx.restore();
  
  
  return this.canvas.toBuffer();
}

module.exports = createWelcomeCard.bind(Object.create(null));