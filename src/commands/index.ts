import type WAWebJS from "whatsapp-web.js";
import ping from './ping';
import sticker from "./sticker";
import yt2mp3 from "./yt2mp3";

const prefix = "!";

const commands = [ping, sticker, yt2mp3];

export default function (message: WAWebJS.Message) {
  if(!message.body.startsWith(prefix)) return;

  const args = message.body.slice(prefix.length).split(/ +/);
  const command = args.shift()?.toLowerCase();

  if(!command) return;

  commands.find(cmd => cmd.name == command || cmd.aliases.includes(command))?.run(message, args);
};