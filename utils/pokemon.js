const fetch = require("node-fetch");
const { MessageEmbed } = require("discord.js");
const getapi = async (url) => {
  // Storing response
  const response = await fetch(url);

  // Storing data in form of JSON
  let data = await response.json();

  return data;
};

const prefix = "!";

function PokeFinder(message) {
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;

  const commandBody = message.content.slice(prefix.length);
  const args = commandBody.split(" ");
  const command = args.shift().toLowerCase();
  const pokeID = args.pop();

  if (command === "poke" && pokeID < 899) {
    getapi(`https://pokeapi.co/api/v2/pokemon/${pokeID}`)
      .then((data) => {
        console.log(data.game_indices[0].version.name);
        const embed = new MessageEmbed()
          // Set the title of the field
          .setTitle(data.name.charAt(0).toUpperCase() + data.name.slice(1))
          // Set the color of the embed
          .setColor(0xff0000)
          // Set the main content of the embed
          .setDescription(
            `Height: ${data.height} decimeters Weight: ${data.weight} hectograms ${data.types[0].type.name} type`
          )
          .setThumbnail(`${data.sprites.front_default}`)
          .addFields({ name: 'Shiny Version:', value: `From ${data.game_indices[0].version.name} version`})
          .setImage(`${data.sprites.front_shiny}`);

        // Send the embed to the same channel as the message
        message.channel.send(embed);
      })
      .catch((err) => {
        console.log(err);
      });
  } else {
    message.reply(
      "Currently there are only 898 pokemon, please try a number 898 and below."
    );
  }
}

module.exports = { PokeFinder };
