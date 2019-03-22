const axios = require("axios");


const client_id = "jbeeh3jlwslrdqeq5reklagles1u78";
const twitch = axios.create({
  // baseURL: "https://api.twitch.tv/helix/",
  accept: "application/vnd.twitchtv.v5+json",
  headers: {"Client-ID": client_id}
});

twitch.get("https://api.twitch.tv/kraken/search/streams?limit=3&query=final+fantasy+xiv").then(data => {
    console.log(data);
})