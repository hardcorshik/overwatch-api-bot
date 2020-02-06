const config = require("./config.json");
const Discord = require("discord.js");
const filesystem = require("fs");

const bot = new Discord.Client({disableEveryone: true});
bot.commands = new Discord.Collection();

filesystem.readdir("./commands/", (err, files) => {
    if(err) {
        console.log(err);
    }
    let jsfile = files.filter(f => f.split(".").pop() == "js");
    if(jsfile.length <= 0) {
        console.log("No commands.");
        return;
    };

    jsfile.forEach((f, i) => {
        let props = require(`./commands/${f}`);
        console.log(`${f} loaded.`);
        bot.commands.set(props.help.name, props);
    });
})

//startup
bot.on("ready", async () => {
    console.log(`${bot.user.username} is online.`);
    bot.user.setActivity(config.prefix+"help", {type: 'WATCHING'});
});
//messages
bot.on("message", async message => {
    if(message.author.bot) {
        return;
    }
    if(message.channel.type == "dm") {
        return;
    }

    let prefix = config.prefix;
    let messageArray = message.content.split(" ");
    let cmd = messageArray[0];
    let params = messageArray.slice(1);

    let cmdfile = bot.commands.get(cmd.slice(prefix.length));
    if (cmdfile) {
        cmdfile.run(bot, message, params);
    }
});

bot.login(config.token);