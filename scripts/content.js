// Listening messages
chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
            let videoUrlYoutube
            console.log('5645464gf65s4dg5f64sd56fg')
            console.log(sender.tab ?
                      "from a content script:" + sender.tab.url :
                      "from the extension");
          if (request.msg === "hello")
            videoUrlYoutube = getYoutubeUrl()
            sendResponse({
                msg: "goodbye",
                videoURL: videoUrlYoutube
            });
    }
);

window.addEventListener('load', (event) => {
    addListenerToDocumentClick()
   });

function addListenerToDocumentClick() {
    document.addEventListener('click', () => {
        try {
            sendVideoUrlToPopUp()
            console.log(getYoutubeUrl())
            return getYoutubeUrl()
        } catch (e) {
            const errorMsg = "Não consegui obter o link para a aula da DIO no Youtube. Sorry"
            console.log(errorMsg)
            return errorMsg
        }
    })
}

function getYoutubeUrl() {
    let iframes = document.getElementsByTagName('iframe')
    let desiredIframe
    for (let iframe of iframes){
        if (iframe.outerHTML.includes('ytc')) {
            desiredIframe = iframe
        }
    }
    return desiredIframe.src.split('?')[0]
}

function sendVideoUrlToPopUp() {
    chrome.runtime.sendMessage({videoURL: "www..."});
}