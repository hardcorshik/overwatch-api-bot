const Discord = require("discord.js");
const config = require("../config.json");
const OverwatchApi = require("overwatch-api");

module.exports.run = async (bot, message, params) => {
    let platform = params[0];
    let region = 'global';
    let tag = params[1];

    OverwatchApi.getProfile(platform, region, tag, (err, json) => {
        if (err) {
            console.error(err);
            message.channel.send("Profile not found (capitalization matters)");
        } else {
            let username = json.username;
            let level = json.level;
            let rank = json.competitive.rank;
            var embed;
            
             if (platform == "pc") {
                embed = new Discord.RichEmbed()
                 .setDescription("Overwatch Basic Profile for" + " " + tag)
                .setColor("#FFA500")
                 .addBlankField()
                .addField("BattleTag", username)
                .addField("Profile Level", level)
                 .addField("Competitive Ranking", rank)
            }
            if (platform == "psn") {
                embed = new Discord.RichEmbed()
                .setDescription("Overwatch Basic Profile for" + " " + tag)
                .setColor("#FFA500")
                .addBlankField()
                .addField("PSN", username)
                .addField("Profile Level", level)
                .addField("Competitive Ranking", rank)
            }
            if (platform == "xbl") {
                embed = new Discord.RichEmbed()
                .setDescription("Overwatch Basic Profile for" + " " + tag)
                .setColor("#FFA500")
                .addBlankField()
                .addField("Xbox Live", username)
                .addField("Profile Level", level)
                .addField("Competitive Ranking", rank)
            }
            message.channel.send(embed);
            console.log("profile retrieved for " + tag + ". " + "(" + platform + ")");
        }
    });
}
module.exports.help = {name:"profile"}