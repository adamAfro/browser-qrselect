import { default as createSlideShow, startSlideshow }
    from "./qr"

const container = document.getElementById('slideshow') as HTMLElement
const input = document.getElementById('input') as HTMLTextAreaElement
const mspfInput = document.getElementById('msPerFrame') as HTMLInputElement


input.addEventListener('change', async () => {
  
    const slides = createSlideShow(input.value, container.offsetWidth)

    container.innerHTML = ''
    container.append(...slides)

    startSlideshow(slides, mspfInput)
})