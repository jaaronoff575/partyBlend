function processLoginResponse(response) {
    console.log("response is: " + response)
    var js = JSON.parse(response.response)

    if (response.status == 200) {
        console.log("200: Playlist Followed")

    } else {
        console.log("400")

    }
}
