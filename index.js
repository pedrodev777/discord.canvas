const [ 
  createWelcomeCard
] = [
  "createWelcomeCard"
].map(file => require("./"+file));

module.exports = { createWelcomeCard };