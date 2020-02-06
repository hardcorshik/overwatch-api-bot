const Discord = require("discord.js");
const config = require("../config.json")

module.exports.run = async (bot, message, params) => {
    let icon = bot.user.displayAvatarURL;
    let embed = new Discord.RichEmbed()
        .setDescription("Bot Info")
        .setColor("#0000ff")
        .setThumbnail(icon)
        .addField("Prefix", config.prefix)


    return message.channel.send(embed);
}
module.exports.help = {
    name: "info"
}