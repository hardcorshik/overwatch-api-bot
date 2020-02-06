const Discord = require("discord.js");
const config = require("../config.json")

module.exports.run = async (bot, message, params) => {
    var help = new Discord.RichEmbed()
    .setDescription("Help for Overwatch API Bot")
    .addBlankField()
    .addField(config.prefix + "profile <platform> <battletag/psn/xboxlive>", "Shows basic profile info. (Replace # with -)")
    .addField(config.prefix + "fullprofile <platform> <battletag/psn/xboxlive>", "Shows full profile info. (Replace # with -)")
    .addField(config.prefix + "help", "You already know what this does")
    .addField(config.prefix + "info", "Bot Information")

    message.channel.send(help);
}
module.exports.help = {name:"help"}