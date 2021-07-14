const Discord = require('discord.js');

const client = new Discord.Client();

const prefix = '-';


client.once('ready', () => {
   console.log('dikcorps bot is online!');    
});

client.on('message', message => {
    if(!message.content.startsWith(prefix) || message.author.bot) return;
    
    const args = message.content.slice(prefix.length).split(/ + /);
    const command = args.shift().toLowerCase();

    if(command === 'ping'){
    message.channel.send('pong!');    
    } else if (command === 'youtube'){
    message.channel.send('lol');     
    } else if (command === 'abbey saale'){
    message.channel.send('tameez seh');    
    }
})





client.login('ODY0NTMzMDQwOTg1NjY5NjYy.YO21Iw.5gNzaSdvsgRLk8RqXY4eMgKhCa4');