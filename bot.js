const Discord = require("discord.js");
const client = new Discord.Client();
const config = require("./config.json");


client.once("ready", () => {
  client.user.setActivity(`Photynho maluquinho chegou`);

  message.channel.send('eaioeahieah')
});

client.on("guildCreate", guild => {

  client.user.setActivity(`Photinho o Gordinho maluquinho Entrou no Servidor`);
});




client.on("guildDelete", guild => {
  console.log(`O gordinho Maluquinho saiu`);
  client.user.setActivity(`Photinho Gordinho tomou Ban`);
});

client.on("message", async message => {
  if (message.author.bot) return;

  if (message.channel.type == "dm") return;

  const args = message.content
    .slice(config.prefix.length)
    .trim()
    .split(/ +/g);

  const comando = args.shift().toLowerCase();
  

  const m = await message.channel.send("Photynho Gordinho");
  if (comando === "photy") {
    m.edit(`Photinho é um gordinho safado`);
  }

  if (comando === "sentimentos") {
    m.edit(`Controle seus sentimentos fera, ninguém se importa`);
  }

  if (comando === "certo") {
    m.edit(`Photynho gordinho está sempre certo`);
  }

  if (comando === "granada") {
    m.edit(`Um homem de verdade mata os amigos na HE`);
  }

  if (comando === "casual") {
    m.edit(`Não jogo com casual players, apenas quem é HARDCORE`);
  }

  if (comando === "presentinho") {
    m.edit(`Mulher é que nem feijoada, quanto mais linguiça tem melhor é.`);
  }
  if (comando === "molier") {
    m.edit(`Mulher não é objeto sexual não, mulher é princesa respeite`);
    }
  if (comando === "cuck") {
    m.edit(`Um homem que não compartilha a esposinha é um homem triste.`);
  }
});

client.login(config.token);
