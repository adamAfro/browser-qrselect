import { default as createSlideShow, startSlideshow } 
    from "./qr"

import { get, set } from "./storage"

(async() => {


    const selection = await get('selection') as string
    if (!selection)
        window.close()

    const container = document.getElementById('slideshows') as HTMLElement
    
    
    const slides = createSlideShow(selection, container.offsetWidth)

    container.append(...slides)

    
    
    const fpsInput = container.parentElement
        .querySelector('input[type="range"]') as HTMLInputElement

    const fps = await get('fps')
    if (fps)
        fpsInput.value = fps
    
    fpsInput.addEventListener('input', event => {

        const fpsInput = event.target as HTMLInputElement
    
        set('fps', fpsInput.value)
    })



    startSlideshow(slides, fpsInput)

})()

export default null // ts workaround
