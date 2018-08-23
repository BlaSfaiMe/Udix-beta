const Discord = require("Discord.js");
const botSettings = require("./reglagebot.json");
const Youtube = require("./youtube.js");
const Play = require("./play");

var bot = new Discord.Client();
var prefix = (reglagebot.prefix)

bot.on('ready', async () => {
    bot.user.setPresence({ game: { name: 'prefix u - Udix', type: 0}});
    console.log("Udix est prêt ! by BlaSfaiMe")
});

bot.login(process.env.TOKEN);

bot.on("guildMemberAdd", member => {
    member.guild.channels.find("name", "règlement📚").send(`:smiley: ${member.user.username.tag } viens de rejoindre le serveur !`)
})

bot.on('message', function (message) {
    if (message.content === "ping"){
        message.reply("pong")
        console.log('ping pong')
    }

    if (Youtube.match(message)) {
        return Youtube.action(message)
    }

    if (message.content === prefix + "help"){
        var help_embed = new Discord.RichEmbed()
            .setColor('#00e676')
            .addField("Commande du Bot Udix", "-**u**__help__ : affiche les commandes du Bot Udix\n-**u**__ping__ : reponds pong")
            .setFooter("Udix, un bot par BlaSfaiMe")
        message.channel.sendEmbed(help_embed);
        //message.channel.send("voici la page d'aide\n **u**_help_ pour afficher les **commandes**");
        console.log("Help demandé")
    }

});
