const Canvas = require("canvas");

Canvas.registerFont("./Montserrat-ExtraBold.ttf", {family:'montserrat'});
Canvas.registerFont('./Montserrat-Bold.ttf',{family:"light"})
Canvas.registerFont('./Montserrat-Regular.ttf',{family:"regular"})

const [ 
  createWelcomeCard
] = [
  "createWelcomeCard"
].map(file => require("./"+file));

module.exports = { createWelcomeCard };