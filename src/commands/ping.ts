import type WAWebJS from "whatsapp-web.js";

export default {
  name: 'ping',
  description: 'Reply ping!',
  aliases: [''],
  run: command,
};

function command(message: WAWebJS.Message) {
  message.reply("pong");
}