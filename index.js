const Canvas = require("canvas");

Canvas.registerFont("./Montserrat-ExtraBold.ttf", {family:'montserrat'});

const [ 
  createWelcomeCard
] = [
  "createWelcomeCard"
].map(file => require("./"+file));

module.exports = { createWelcomeCard };