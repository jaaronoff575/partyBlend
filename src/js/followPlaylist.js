


function processFollowPlaylistResponse(response) {
    console.log("response is: " + response)
    var js = JSON.parse(response.response)

    if (response.status == 200) {
        console.log("Playlist Followed")

    } else {
        console.log("400")

    }
}


function handleFollowPlaylist(){
    var isPublic = false

    //Same as makeOneFieldAPICall but with a PUT and custom api call
    var js = JSON.stringify(isPublic);
    console.log("JS:" + js);
    var xhr = new XMLHttpRequest();
    xhr.open("PUT", followPlaylist + playlist_id + "/followers", true);

    // send the collected data as JSON
    xhr.send(js);

    xhr.onloadend = function () {
        console.log(xhr);
        console.log(xhr.response);

        if (xhr.readyState == XMLHttpRequest.DONE) {
            console.log("XHR:" + xhr.responseText);
            processFollowPlaylistResponse(xhr);
        }
    }


}