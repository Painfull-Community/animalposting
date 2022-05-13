module.exports = {
    execute: function (message, args) {
        message.reply("https://cataas.com/cat?" + new Date().getTime())
    }
}