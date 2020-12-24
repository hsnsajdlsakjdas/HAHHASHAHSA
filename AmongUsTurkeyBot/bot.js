const Discord = require("discord.js");
const chalk = require("chalk");
const Advanced = require('discordjs-advanced');

const prefix = require('./models/prefix');
                         
                         
const client = new Advanced.Client({
    token: "tokeniniz", 
    prefix: "!", 
    sahip: ["276057718354083860"], 
    komutDosya: "komutlar",
    veritabanı : {
       dosya:"database.json"
    },
    varsayılanKomutlar: ['yardım'],
    everyoneKapat: true
});  

client.eventYükle("olaylar");client.eventYükle("olaylar");

client.kategoriYükle([ 
    ['eglence', 'Eglence Komutları'],
    ['moderasyon','Moderasyon Komutları'],
    ['kullanıcı','Kullanıcı komutları'] ,
    ['genel', 'Genel komutlar']
]);

//-Bot hazır mesajı-
var log =  chalk.red("Bot başarı ile giriş yaptı.")
var log01 = chalk.bold.yellow("Bot başarı ile giriş yaptı.")
    

client.on("ready",() => {
 console.log(log)
 console.log(log01)
});
const { Client, MessageAttachment } = require('discord.js');
client.on('ready', () => {
    console.log('I am ready!');
  });
  client.on('message', message => {
    if (message.content === '!rip') {
        const attachment = new MessageAttachment('https://i.imgur.com/w3duR07.png');
        message.channel.send(`${message.author},`, attachment);
  }
});


client.on('guildMemberAdd', member => {
  const channel = member.guild.channels.cache.find(ch => ch.name === 'member-log');
  if (!channel) return;
  channel.send(`Abicim burda durma birazdan mal gelecek, ${member}`);
});

  client.on('message', message => {
    if (message.content === 'avatarımı ver') {
        message.reply(message.author.displayAvatarURL());
    }
  });


client.on('message', msg => {
  if (msg.content === 'naptın') {
    msg.reply('napim');
  }
});

client.on('message', msg => {
  if (msg.content === 'gif') {
    msg.reply('https://imgur.com/gallery/ajytpEY');
  }
});

client.on('message', msg => {
  if (msg.content === 'kiss me everyone') {
    msg.reply('everyone kissed u wow https://imgur.com/t/kiss/g7fuqly');
  }
});

client.on('message', msg => {
  if (msg.content === 'sa') {
    msg.reply('as');
  }
});

client.on('message', msg => {
  if (msg.content === 'naber') {
    msg.reply('iyi kral sen');
  }
})

      client.login('NzgxODQwNDA4MDk4NjM1Nzg3.X8Dfnw.4qvCtMykvOKrnFhSRZ3vRUdCW0M');