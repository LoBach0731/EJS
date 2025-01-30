const axios = require("axios");
const settings = require("../../config/settings")
async function renderHomePage(req, res) {
    let data = { game_id: req.params.id };
    res.render("game", {
        title: "Games!",
        gameData: data,
    });

}
module.exports = {renderHomePage};