


function processTopTracksResponse(response){
    console.log("response is: " + response)
    let js = JSON.parse(response.response);

    let userTopTracks = js["items"]


    if (response.status == 200) {
        console.log(userTopTracks)
        topTracks["user_id"] = userTopTracks

    } else {
        console.log("400")
        location.href = "playlistCreated.html"
    }
}

function handleGetUserTopItems(){
    let limit = 50
    let offset = 0
    let time_range = "medium_term"
    let type = "tracks"

    var data = {}
    data["limit"] = limit
    data["offset"] = offset
    data["time_range"] = time_range
    var js = JSON.stringify(data);
    console.log("JS:" + js);

    var xhr = new XMLHttpRequest();
    xhr.open("GET", getUserTopItems + type , true);

    // send the collected data as JSON
    xhr.send(js);

    xhr.onloadend = function () {
        console.log(xhr);
        console.log(xhr.response);

        if (xhr.readyState == XMLHttpRequest.DONE) {
            console.log("XHR:" + xhr.responseText);
            processTopTracksResponse(xhr);
        }
    }

}
