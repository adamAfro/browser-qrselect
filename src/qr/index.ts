import makeQRCode from "./lib/qrcode"

export default function createQRSlideshow(data: string, dim: number) {

    const chunks = chunkString(data, { maxLength: 256 })
    console.log(chunks)
    const slides = [] as SVGElement[]
    for (const chunk of chunks) {

        const slide = makeQRCode({ msg: JSON.stringify(chunk), dim })

        slide.style.display = "none"
        
        slide.dataset.index = chunk.index.toString()
        slide.dataset.total = chunk.total.toString()

        slides.push(slide)
    }

    return slides
}

export function startSlideshow(slides: SVGElement[], mspfInput) {

    slides[0].style.display = ""

    let i = 0; const n = slides.length
    function changeFrame() {
    
        slides[i].style.display = "none"
        i = (i + 1) % n
        slides[i].style.display = ""

        setTimeout(changeFrame, parseInt(mspfInput.value))
    }

    setTimeout(changeFrame, parseInt(mspfInput.value))
}



interface ChunkOptions { maxLength: number }

function chunkString(data: string, options: ChunkOptions) {

    const slices = []
    for (let i = 0; i < data.length; i += options.maxLength)
        slices.push(data.slice(i, i + options.maxLength))

    return slices.map((slice, index) => ({ data: slice, 
        index, total: slices.length 
    }))
}