
function processCurrentProfileResponse(response){
    console.log("response is: " + response)
    let js = JSON.parse(response.response);

    let displayName = js["display_name"]


    if (response.status == 200) {
        console.log(displayName)

    } else {
        console.log("400")
    }
}

function handleGetCurrentUserProfile(){
    var data = {}
    var js = JSON.stringify(data);
    console.log("JS:" + js);

    var xhr = new XMLHttpRequest();
    xhr.open("GET", getCurrentUserProfile , true);

    // send the collected data as JSON
    xhr.send(js);

    xhr.onloadend = function () {
        console.log(xhr);
        console.log(xhr.response);

        if (xhr.readyState == XMLHttpRequest.DONE) {
            console.log("XHR:" + xhr.responseText);
            processCurrentProfileResponse(xhr);
        }
    }

}