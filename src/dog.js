module.exports = {
    execute: function (message, args) {
        const axios = require("axios");
        axios.get("https://dog.ceo/api/breeds/image/random")
            .then(json => {
                message.reply(json.data.message)
            })
    }
}