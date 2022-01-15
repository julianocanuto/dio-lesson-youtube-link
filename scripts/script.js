let videoUrlOnYoutube

// After content be loaded in DOM
document.addEventListener('DOMContentLoaded', function () {
    // Add listener to click event on button btn-get-link
    document.querySelector('#btn-get-link').addEventListener('click', () => {
        // Action to be performed on click
        requestVideoUrlOnYoutube('hello')
        });    
    })

function updateTextWithVideoUrl(newText) {
    document.querySelector('#txt-yt-link').innerHTML = newText
}

function requestVideoUrlOnYoutube(message) {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        chrome.tabs.sendMessage(tabs[0].id, {msg: message}, function(response) {
            if (!chrome.runtime.lastError) {
                // if you have any response
                console.log(response.msg)
                console.log("URL do vídeo no youtube", response.videoURL)
                videoUrlOnYoutube = response.videoURL
                updateTextWithVideoUrl(videoUrlOnYoutube)
            } else {
                // if you don't have any response it's ok but you should actually handle
                // it and we are doing this when we are examining chrome.runtime.lastError
                console.log("não foi possivel recuperar a resposta")
                console.log("rolou o seguinte erro: ")
                console.log(chrome.runtime.lastError.message)
            }

                     
        });
      });
}