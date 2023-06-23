import WAWebJS from "whatsapp-web.js";
import ping from './ping';

const prefix = "!";

const commands = [ping];

export default function (message: WAWebJS.Message) {
  if(!message.body.startsWith(prefix)) return;

  const args = message.body.slice(prefix.length).split(/ +/);
  const command = args.shift()?.toLowerCase();

  if(!command) return;

  commands.find(cmd => cmd.name == command || cmd.aliases.includes(command))?.run(message);

  console.log('Hello World!');
};