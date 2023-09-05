import { set } from "./storage"

setMenuAction({ title: 'QR', contexts: ['all'] }, (context) => {

    set('selection', context.selectionText)

    popup({ url: 'popup.html' })
})



declare const chrome: any

interface Widget { title: string, icon: string }

interface Tab { id: number }

/**
 * @example // log tab on click and popup example.com
 * const callback = (tab: Tab) => console.debug(tab)
 * const popupChange = { url: 'example.com', keep: true }
 * setWidgetAction(callback, popupChange)
 */
export function setWidgetAction(widget: Widget, action: (tab: Tab) => void) {

    chrome.action.onClicked.addListener(action)
}



interface MenuItem { id?: string, title: string, contexts?: string[] }

type ContextInfo = { selectionText: string }

export async function setMenuAction(item: MenuItem, action: (context: ContextInfo, tab: Tab) => void) {

    if (!item.id)
        item.id = item.title.toLocaleLowerCase().replaceAll(' ', '-')
    if (!item.contexts)
        item.contexts = ['all']

    await chrome.contextMenus.create(item, () => void chrome.runtime.lastError)
    await chrome.contextMenus.onClicked.addListener(action)
}



interface PopupChange { url?: string, keep?: boolean }

async function popup(change: PopupChange) {

    const previous = chrome.action.getPopup({})
    const changing = change.url ?
        chrome.action.setPopup({ popup: change.url }) :
        Promise.resolve()

    const opening = await chrome.action.openPopup()
    await changing
    if (!change.keep)
        await chrome.action.setPopup({ popup: await previous })

    return opening
}