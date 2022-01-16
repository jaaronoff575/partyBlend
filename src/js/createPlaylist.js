var playlist_id = 0;

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

    var xhr = makeFourFieldAPICall(name, isPublic, isCollaborative, description, "name", "public", "collaborative", "description", createPlaylist)

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