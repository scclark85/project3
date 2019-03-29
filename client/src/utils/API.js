const axios = require("axios");

export default {
  // Searches for a game using the Giant Bomb API
  searchGame: function(game) {
    return axios.get("/api/data/giantbomb/" + game) ;
  },

  // Searches for streamers playing on Twitch API
  searchTwitch: function(game) {
    // return twitch.get("https://api.twitch.tv/kraken/search/streams?limit=3&query=assassin+creed+odyssey")
    return axios.get("/api/data/twitch/" + game);
  },

  // Get a user and their wishlist?
  loadUser: function(username) {
    return axios.get("/api/users/" + username)
  },

}
// IDGB API credentials
// const user_key = "940917f24ab11ddaece60ec17ad01354";
// const IDBM = axios.create({
//   accept: "application/json",
//   headers: {"User-Key": user_key}
// });
// IDBM rating api
// IDBM.get("https://api-v3.igdb.com/age_ratings/?fields=*").then(function(res){
//   console.log(res.data[0].rating);
// });
// // IDBM game name/summary api
// IDBM.get("https://api-v3.igdb.com/games/?search=Halo&fields=name,summary").then(function(res){
//   console.log(res.data[0]);
// });

