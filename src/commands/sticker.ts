import type WAWebJS from "whatsapp-web.js";

export default {
  name: 'sticker',
  description: 'Make a sticker!',
  aliases: ['s'],
  run: command,
};

async function command(message: WAWebJS.Message) {
  if(!message.hasMedia) {
    message.reply("Foi mal, precisa de uma imagem pra fazer o sticker")
    return;
  }

  const media = await message.downloadMedia();

  message.reply(media, undefined, {sendMediaAsSticker: true})

}