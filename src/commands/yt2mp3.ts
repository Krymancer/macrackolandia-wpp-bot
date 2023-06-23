import type WAWebJS from "whatsapp-web.js";

export default {
  name: 'yt2mp3',
  description: 'Reply ping!',
  aliases: ['mp3', 'y2mp3'],
  run: command,
};

function command(message: WAWebJS.Message, args: string[]) {
  message.reply("Not yet implemented");
}