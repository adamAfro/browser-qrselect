declare const browser: any

export async function get(key: string) {

    const data = await browser.storage.local.get(key)
    if ( !data)
        return undefined
        
    return data[key]
}

export async function set(key: string, data: any) {
    
    return browser.storage.local.set({ [key]: data})
}

export async function remove(key: string) {

    return browser.storage.local.remove(key)
}