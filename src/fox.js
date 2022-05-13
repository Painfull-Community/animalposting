module.exports = {
    execute: function (message, args) {
        const axios = require("axios");
        axios.get("https://randomfox.ca/floof")
            .then(json => {
                message.reply(json.data.image)
            })
    }
}