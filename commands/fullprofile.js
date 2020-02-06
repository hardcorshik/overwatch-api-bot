const Discord = require("discord.js");
const config = require("../config.json");
const OverwatchApi = require("overwatch-api");

module.exports.run = async (bot, message, params) => {
    let platform = params[0];
    let region = 'global';
    let tag = params[1];
    var profile;

    OverwatchApi.getProfile(platform, region, tag, (err, json) => {
        if (err) {
            console.error(err);
            message.channel.send("Could not fetch user's profile. Make sure capitalization and spelling is correct. User has to own Overwatch for this to work.");
        } else {
            let username = json.username;
            let level = json.level;
            let winsqp = json.games.quickplay.won;
            let gamesqp = json.games.quickplay.played;
            let ratioqp = winsqp / gamesqp * 100 + "%";
            let qpplaytime = json.playtime.quickplay;
            let compplaytime = json.playtime.competitive;
            let gamescomp = json.games.competitive.played;
            let winscomp = json.games.competitive.won;
            let lostcomp = json.games.competitive.lost;
            let drawcomp = json.games.competitive.draw;
            let ratiocomp = json.games.competitive.win_rate;
            let rank = json.competitive.rank;
            let none = "------------"
            var embed;
            
            if (platform == "pc") {
                embed = new Discord.RichEmbed()
                 .setDescription("Overwatch Full Profile for" + " " + tag)
                .setColor("#FFA500")
                 .addBlankField()
                 .addField("BattleTag", username)
                 .addField("Profile Level", level)
                 .addBlankField()
                 .addField("Quick Play Stats", none)
                 .addField("Played", gamesqp)
                 .addField("Wins", winsqp)
                 .addField("Ratio", ratioqp)
                 .addField("Playtime", qpplaytime)
                 .addBlankField()
                 .addField("Competitive Play Stats", none)
                 .addField("Competitive Ranking", rank)
                 .addField("Played", gamescomp)
                 .addField("Wins", winscomp)
                 .addField("Lost", lostcomp)
                 .addField("Draw", drawcomp)
                 .addField("Ratio", ratiocomp)
                 .addField("Playtime", compplaytime)
            }
            if (platform == "psn") {
                embed = new Discord.RichEmbed()
                .setDescription("Overwatch Full Profile for" + " " + tag)
                .setColor("#FFA500")
                 .addBlankField()
                 .addField("PSN", username)
                 .addField("Profile Level", level)
                 .addBlankField()
                 .addField("Quick Play Stats", none)
                 .addField("Played", gamesqp)
                 .addField("Wins", winsqp)
                 .addField("Ratio", ratioqp)
                 .addField("Playtime", qpplaytime)
                 .addBlankField()
                 .addField("Competitive Play Stats", none)
                 .addField("Competitive Ranking", rank)
                 .addField("Played", gamescomp)
                 .addField("Wins", winscomp)
                 .addField("Lost", lostcomp)
                 .addField("Draw", drawcomp)
                 .addField("Ratio", ratiocomp)
                 .addField("Playtime", compplaytime)
            }
            if (platform == "xbl") {
                embed = new Discord.RichEmbed()
                .setDescription("Overwatch Full Profile for" + " " + tag)
                .setColor("#FFA500")
                 .addBlankField()
                 .addField("Xbox Live", username)
                 .addField("Profile Level", level)
                 .addBlankField()
                 .addField("Quick Play Stats", none)
                 .addField("Played", gamesqp)
                 .addField("Wins", winsqp)
                 .addField("Ratio", ratioqp)
                 .addField("Playtime", qpplaytime)
                 .addBlankField()
                 .addField("Competitive Play Stats", none)
                 .addField("Competitive Ranking", rank)
                 .addField("Played", gamescomp)
                 .addField("Wins", winscomp)
                 .addField("Lost", lostcomp)
                 .addField("Draw", drawcomp)
                 .addField("Ratio", ratiocomp)
                 .addField("Playtime", compplaytime)
            }
            message.channel.send(embed);
            console.log("full profile retrieved for " + tag + ". " + "(" + platform + ")");
        }
    });
}
module.exports.help = {name:"fullprofile"}