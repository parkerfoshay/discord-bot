const prefix = "!";

function MathSolver(message) {
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;

  const commandBody = message.content.slice(prefix.length);
  const args = commandBody.split(" ");
  const command = args.shift().toLowerCase();
  const numArgs = args.map((x) => parseFloat(x));

  switch (command) {
    case "sum":
      const sum = numArgs.reduce((counter, x) => (counter += x));
      message.reply(`The sum of all the agruments you provided is ${sum}`);
      break;
    case "difference":
      const difference = numArgs.reduce((counter, x) => (counter -= x));
      message.reply(
        `The difference of all the agruments you provided is ${difference}`
      );
      break;
    case "product":
        const product = numArgs.reduce((counter, x) => (counter *= x));
        message.reply(
          `The product of all the agruments you provided is ${product}`
        );
      break;
      case "quotient":
        const quotient = numArgs.reduce((counter, x) => (counter / x));
        message.reply(
          `The quotient of all the agruments you provided is ${quotient}`
        );
      break;
    default:
      break;
  }
}

module.exports = { MathSolver }