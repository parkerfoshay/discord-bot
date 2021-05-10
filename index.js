const {Client, MessageAttachment, MessageEmbed} = require("discord.js");
const config = require("./config.json");

const client = new Client();

const prefix = "!";

client.on("message", function (message) {
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;

  const commandBody = message.content.slice(prefix.length);
  const args = commandBody.split(" ");
  const command = args.shift().toLowerCase();

  if (command === "ping") {
    const timeTaken = Date.now() - message.createdTimestamp;
    message.reply(
      `Don't ping me until your latency is perfect, Currently your latency is at ${timeTaken}ms`
    );
  } else if (command === "sum") {
    const numArgs = args.map((x) => parseFloat(x));
    const sum = numArgs.reduce((counter, x) => (counter += x));
    message.reply(`The sum of all the agruments you provided is ${sum}`);
  } else if (command === "difference") {
    const numArgs = args.map((x) => parseFloat(x));
    const difference = numArgs.reduce((counter, x) => (counter -= x));
    message.reply(
      `The difference of all the agruments you provided is ${difference}`
    );
  } else if (command === "product") {
    const numArgs = args.map((x) => parseFloat(x));
    const product = numArgs.reduce((counter, x) => (counter *= x));
    message.reply(
      `The product of all the agruments you provided is ${product}`
    );
  } else if (command === "quotient") {
    const numArgs = args.map((x) => parseFloat(x));
    const quotient = numArgs.reduce((counter, x) => counter / x);
    message.reply(
      `The quotient of all the agruments you provided is ${quotient}`
    );
  }
});


client.on('message', message => {
    // If the message is '!rip'
    if (message.content === '!nathan') {
      // Create the attachment using MessageAttachment
      const attachment = new MessageAttachment('./assets/images/big-boy-nate.jpg');
      // Send the attachment in the message channel
      message.channel.send(`The beautiful beast`, attachment);
    }
  });

  client.on('message', message => {
    if (message.mentions.has(client.user.id)) {
         // We can create embeds using the MessageEmbed constructor
    // Read more about all that you can do with the constructor
    // over at https://discord.js.org/#/docs/main/master/class/MessageEmbed
    const embed = new MessageEmbed()
    // Set the title of the field
    .setTitle('Just stop, please')
    // Set the color of the embed
    .setColor(0xff0000)
    // Set the main content of the embed
    .setDescription('I am busy right now')
    .setImage(`https://i.pinimg.com/236x/f1/4c/01/f14c01d8d0bd7b1a831fed561238a99c.jpg`)
  // Send the embed to the same channel as the message
  message.channel.send(embed);
    };
    
  });

client.login(config.BOT_TOKEN);
