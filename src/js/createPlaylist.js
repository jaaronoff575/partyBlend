var playlist_id = 0;
var loggedInUsers = 0;

//filler variable for what ever the user id is
var user_id = 0;

function processCreatePlaylistResponse(response) {
    console.log("response is: " + response)
    var js = JSON.parse(response.response);

    var playlistName = js["id"];

    if (response.status == 200) {
        console.log(playlistName)
        playlist_id = playlistName;

    } else {
        console.log("400")
        location.href = "playlistCreated.html"
    }
}

function handleCreatePlaylist() {
    var name = "PartyBlend"
    var isPublic = false
    var isCollaborative = true
    var description = "Made with PartyBlend"

    var data = {};
    data["name"] = name;
    data["public"] = isPublic;
    data["collaborative"] = isCollaborative;
    data["description"] = description;
    var js = JSON.stringify(data);
    console.log("JS:" + js);

    var xhr = new XMLHttpRequest();
    xhr.open("POST", createPlaylist + user_id + "/playlists", true);

    // send the collected data as JSON
    xhr.send(js);

    // This will process results and update HTML as appropriate.
    xhr.onloadend = function () {
        console.log(xhr);
        console.log(xhr.response);

        if (xhr.readyState == XMLHttpRequest.DONE) {
            console.log("XHR:" + xhr.responseText);
            processCreatePlaylistResponse(xhr);
        }
    }

}