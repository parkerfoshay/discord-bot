require("dotenv").config();
const {getapi} = require("../utils/fetcher.js");
const { MessageEmbed } = require("discord.js");

const prefix = "!";

function CryptoFinder(message) {
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;

  const commandBody = message.content.slice(prefix.length);
  const args = commandBody.split(" ");
  const command = args.shift().toLowerCase();
  const cryptoID = args.pop().toUpperCase();

  if (command === "crypto") {
    getapi(`https://api.nomics.com/v1/currencies/ticker?key=${process.env.NOMICS_API_KEY}&ids=${cryptoID}`)
      .then((data) => {
        console.log(data);
         const embed = new MessageEmbed()
          // Set the title of the field
          .setTitle(data[0].name)
          // Set the color of the embed
          .setColor(0xff0000)
          // Set the main content of the embed
          .setDescription(
            `Here is the stats for ${data[0].name}`
          )
          .setThumbnail(`${data[0].logo_url}`)
          .addFields({ name: 'Price:', value: `As of ${data[0].price_timestamp} ${data[0].symbol} is at ${data[0].price}`})
          .addFields({ name: 'Supply:', value: `Circulating supply is currently at ${data[0].circulating_supply} with a max supply of ${data[0].max_supply}`})
          .addFields({ name: 'Number of Exchanges:', value: `${data[0].num_exchanges}`})
          .addFields({ name: 'First Traded:', value: `${data[0].first_trade}`})
          .addFields({ name: 'High:', value: `$${data[0].high}`});

        // Send the embed to the same channel as the message
        message.channel.send(embed);
        ;
      })
      .catch((err) => {
        console.log(err);
      });
  } 
}

module.exports = { CryptoFinder };
