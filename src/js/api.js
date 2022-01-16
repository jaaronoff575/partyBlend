// all access driven through BASE. Must end with a SLASH
// be sure you change to accommodate your specific API Gateway entry point
var base_url = " https://api.spotify.com/v1/";

var createPlaylist    = base_url + "users/";   // POST //TODO Idk how to insert info in the middle
var followPlaylist    = base_url + "playlists/";   // PUT
var getCurrentUserProfile = base_url + "me" //GET
var getUserProfile = base_url + "users/" //GET
var getUserTopItems = base_url +"me/top/" //GET

