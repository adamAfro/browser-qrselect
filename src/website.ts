import { default as createSlideShow, startSlideshow }
    from "./qr"

const container = document.getElementById('slideshow') as HTMLElement
const input = document.getElementById('input') as HTMLTextAreaElement
const file = document.getElementById('file') as HTMLInputElement
const mspfInput = document.getElementById('msPerFrame') as HTMLInputElement


input.addEventListener('change', createQRSlideshow)

input.addEventListener('dragover', (e) => {
    e.preventDefault()
    input.dataset.filedrag = 'true'
})

input.addEventListener('dragleave', () => {  
    input.dataset.filedrag = 'false'
})

input.addEventListener('drop', async (e) => {
    
    e.preventDefault()

    input.dataset.filedrag = 'false'

    const files = Array.from(e.dataTransfer.files)
    const contents = await Promise
        .all(files.map(f => readFile(f)))  
    
    input.value += contents.join('\n')

    createQRSlideshow()
})

file.addEventListener('change', async () => {

    const files = Array.from(file.files)
    const contents = await Promise
        .all(files.map(f => readFile(f)))  
    
    input.value += contents.join('\n')
    
    createQRSlideshow()
})

function createQRSlideshow() {

    const slides = createSlideShow(input.value, container.offsetWidth)

    container.innerHTML = ''
    container.append(...slides)

    startSlideshow(slides, mspfInput)
}

async function readFile(file): Promise <string> {
    if (!file) {
        console.error('No file provided.')
        return ''
    }
  
    const reader = new FileReader()
    return new Promise((ok, er) => {

        reader.onload = (event) => {
            const fileContent = ArrayBuffer.isView(event.target.result) ?
                arrayBufferToString(event.target.result) :
                event.target.result as string

            ok(fileContent)
        }
        
        reader.readAsText(file)
    })
}

function arrayBufferToString(arrayBuffer) {
    const uint8Array = new Uint8Array(arrayBuffer)
    const textDecoder = new TextDecoder('utf-8')
    return textDecoder.decode(uint8Array)
}