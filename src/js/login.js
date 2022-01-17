//var state = generateRandomString(16)

function processLoginResponse(response) {
    console.log("response is: " + response)
    var js = JSON.parse(response.response)

    if (response.status == 200) {
        console.log("200: Playlist Followed")
        //TODO need to add code to handle authorization and finish login auth

    } else {
        console.log("400")

    }
}


function handleLogin(){
    let client_id = "155c1516f7b14a3dba83d260743a046c"
    let response_type = "token"
    let redirect_uri = "" //TODO need to add urls
    let state = "valid" //TODO Should prolly generate some random string or something
    let scope = "playlist-modify-private user-top-read user-read-private"

    let data = {}
    data["client_id"] = client_id
    data["response_type"] = response_type
    data["redirect_uri"] = redirect_uri
    data["state"] = state
    data["scope"] = scope

    var js = JSON.stringify(data);
    console.log("JS:" + js);

    var xhr = new XMLHttpRequest();
    xhr.open("GET", login_url , true);

    // send the collected data as JSON
    xhr.send(js);

    xhr.onloadend = function () {
        console.log(xhr);
        console.log(xhr.response);

        if (xhr.readyState == XMLHttpRequest.DONE) {
            console.log("XHR:" + xhr.responseText);
            processLoginResponse(xhr);
        }
    }

}
