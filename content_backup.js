window.addEventListener('load', (event) => {
    // console.log('page is fully loaded');
    // console.log("to no content")
    // let elements = document.querySelectorAll('link')
    // console.log(elements)

    // for (let elem of elements) {
    //     let mytext = ''
    //     mytext = elem.href
    //     if (mytext.includes('watch?v=')) {
    //         console.log(elem.href)
    //     }
    // }

    //console.log('chegando no elemento root')
    //root = document.getElementById('root')
    //console.log('chegando no iframe')
    //iframes = root.getElementsByTagName('iframe')
    //console.log('terminando o iframe')
    //console.log(iframes)


    const getYoutubeUrl = () => {
        let iframes = document.getElementsByTagName('iframe')
        let desiredIframe
        for (let iframe of iframes){
            if (iframe.outerHTML.includes('ytc')) {
                desiredIframe = iframe
            }
        }

        return desiredIframe.src.split('?')[0]
    }

    console.log(getYoutubeUrl())
    /*
    * se     
    * iframes[0].outerHTML.includes('ytc') == true
    * salvar iframe e
    * pegar o src
    * iframes[0].src.split('?')
    * iframes[0].src.split('?')[0]
    */

    

    // depois que a página carrega ainda precisamos clicar no video para que o iframe com o video apareça
    // o link com rel canonical que tem o link para o video está dentro do iframe#ytc8 (ou outro numero)

    // https://youtu.be/zrM7EwUXsYU programador br pegando comentarios do insta (usando puppeteer)
});
