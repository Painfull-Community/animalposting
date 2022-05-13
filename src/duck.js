module.exports = {
    execute: function (message, args) {
        message.reply("https://random-d.uk/api/randomimg?" + new Date().getTime())
    }
}