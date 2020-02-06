const Discord = require("discord.js");
const config = require("../config.json")

module.exports.run = async (bot, message, params) => {
    return message.channel.send("Yes");
}
module.exports.help = {name:"testbot"}