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

  const allowedTypes = ["image/jpeg", "image/png", "video/mp4", "image/webp", "image/gif"];

  if(!allowedTypes.includes(media.mimetype)) {
    message.reply("Foi mal, só aceito imagens, videos e gifs" + "\n" + "Mime type: " + media.mimetype);
    return;
  }

  message.reply(media, undefined, {sendMediaAsSticker: true})

}