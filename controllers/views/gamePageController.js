const axios = require("axios");
const settings = require("../../config/settings")
async function renderHomePage(req, res) {
    let data = [];
        const response = await axios.get(
            `${settings.ROOT}:${settings.PORT}/api/games/${req.params.id}`,
        );
        data = response.data;
        const cover = await getGameDataFromEndPoint(req.params.id, "covers");
        data.cover = cover[0] ? cover[0].url : "";

        const genres = await getGameDataFromEndPoint(req.params.id, "genres"); 
        data.genres = genres;


        console.log(data);
        res.render("game", {
        title: "CMP - IGDB: " + data.name,
        gameData: data,
        });
}

async function getGameDataFromEndPoint(gameid, endpoint) {
    let values = await axios.get(
        `${settings.ROOT}:${settings.PORT}/api/${endpoint}`,
        {
            params: { gameid: gameid },
        }
    );
    return values.data;
}
module.exports = {renderHomePage};