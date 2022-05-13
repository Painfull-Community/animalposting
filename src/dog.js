module.exports = {
    execute: function (message, args) {
        axios.get("https://dog.ceo/api/breeds/image/random")
            .then(json => {
                message.reply(json.data.message)
            })
    }
}