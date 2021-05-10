const {Client, MessageAttachment} = require("discord.js");
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

client.login(config.BOT_TOKEN);
