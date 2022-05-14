module.exports = {
    execute: function (message, args) {
        if(args[0] == "simulation") {
            // easter egg :)
            return message.reply("https://i.imgur.com/0kfq8kA.gif")
        }
        message.reply("https://cataas.com/cat?" + new Date().getTime())
    }
}