declare const chrome: any

export async function get(key: string) {

    const data = await chrome.storage.local.get(key)
    if ( !data)
        return undefined
        
    return data[key]
}

export async function set(key: string, data: any) {
    
    return chrome.storage.local.set({ [key]: data})
}

export async function remove(key: string) {

    return chrome.storage.local.remove(key)
}