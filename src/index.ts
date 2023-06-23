import qrcode from 'qrcode-terminal';
import {Client, LocalAuth} from 'whatsapp-web.js';
import type WAWebJS from 'whatsapp-web.js';

import commands from './commands'; './commands';

const client = new Client({
  authStrategy: new LocalAuth(),
  puppeteer: {headless: true, args: ['--no-sandbox', '--disable-setuid-sandbox']}
});

client.on('qr', qr => {
  qrcode.generate(qr, {small: true});
});

client.on('ready', () => {
  console.log('Client is ready!');
});

client.on('message', (message : WAWebJS.Message) => {
  commands(message);
});

client.initialize();