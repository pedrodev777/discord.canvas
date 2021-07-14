const { createWelcomeCard } = require("./index.js");

const Discord = require("discord.js")
const client = new Discord.Client()

client.on('ready', async () => {
  let user = await client.users.fetch("852922358170779658")
  
  user.send({files:[new Discord.MessageAttachment(await createWelcomeCard(), 'teste.png')]})
})

client.login();