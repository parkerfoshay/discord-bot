const fetch = require("node-fetch");
const { MessageEmbed} = require("discord.js");
const getapi = async (url) => {
    // Storing response
    const response = await fetch(url);
  
    // Storing data in form of JSON
    let data = await response.json();
  
    return data;
  };

  getapi('https://pokeapi.co/api/v2/pokemon/1/').then((data) => {
      console.log(data);
  })

  const prefix = "!";

function PokeFinder(message) {
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;

  const commandBody = message.content.slice(prefix.length);
  const args = commandBody.split(" ");
  const command = args.shift().toLowerCase();

  if (command === "poke") {

    let pokeID = args.pop()
    getapi(`https://pokeapi.co/api/v2/pokemon/${pokeID}`).then((data) => {
        console.log(data);
        const embed = new MessageEmbed()
      // Set the title of the field
      .setTitle(data.name)
      // Set the color of the embed
      .setColor(0xff0000)
      // Set the main content of the embed
      .setDescription(`Height: ${data.height} Weight: ${data.weight}`)
      .setImage(
        `${data.sprites.front_default}`
      );
    // Send the embed to the same channel as the message
    message.channel.send(embed);
    }).catch(err => {
        console.log(err)
    })
  
    
  }
}

module.exports = { PokeFinder }