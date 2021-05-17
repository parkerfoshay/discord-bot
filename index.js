require("dotenv").config();

const { Client, MessageAttachment, MessageEmbed } = require("discord.js");

const { MathSolver } = require("./commands/math");
const { PokeFinder } = require("./commands/pokemon");
const { CryptoFinder } = require("./commands/crypto");
const client = new Client();

/* client.on("message", function (message) {
  MathSolver(message);
  
});

client.on("message", function (message) {
  PokeFinder(message);
}); */

client.on("message", function (message) {
  CryptoFinder(message);
});

client.on("message", (message) => {
  if (message.mentions.has(client.user.id)) {
    // We can create embeds using the MessageEmbed constructor
    // Read more about all that you can do with the constructor
    // over at https://discord.js.org/#/docs/main/master/class/MessageEmbed
    const embed = new MessageEmbed()
      // Set the title of the field
      .setTitle("Just stop, please")
      // Set the color of the embed
      .setColor(0xff0000)
      // Set the main content of the embed
      .setDescription("I am busy right now")
      .setImage(
        `https://i.pinimg.com/236x/f1/4c/01/f14c01d8d0bd7b1a831fed561238a99c.jpg`
      );
    // Send the embed to the same channel as the message
    message.channel.send(embed);
  }
});

client.login(process.env.BOT_TOKEN);

module.exports = client;
