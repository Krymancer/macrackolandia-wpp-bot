import type WAWebJS from "whatsapp-web.js";
import ping from './ping';
import sticker from "./sticker";

const prefix = "!";

const commands = [ping, sticker];

export default function (message: WAWebJS.Message) {
  if(!message.body.startsWith(prefix)) return;

  const args = message.body.slice(prefix.length).split(/ +/);
  const command = args.shift()?.toLowerCase();

  if(!command) return;

  console.log(command);

  commands.find(cmd => cmd.name == command || cmd.aliases.includes(command))?.run(message);
};