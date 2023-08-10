import { set } from "./storage"

console.debug(browser.action)

setMenuAction({ title: 'QR', contexts: ['all'] }, (context) => {

    set('selection', context.selectionText)

    popup({ url: 'popup.html' })
})



declare const browser: any

interface Widget { title: string, icon: string }

interface Tab { id: number }

/**
 * @example // log tab on click and popup example.com
 * const callback = (tab: Tab) => console.debug(tab)
 * const popupChange = { url: 'example.com', keep: true }
 * setWidgetAction(callback, popupChange)
 */
export function setWidgetAction(widget: Widget, action: (tab: Tab) => void) {

    browser.action.onClicked.addListener(action)
}



interface MenuItem { id?: string, title: string, contexts?: string[] }

type ContextInfo = { selectionText: string }

export async function setMenuAction(item: MenuItem, action: (context: ContextInfo, tab: Tab) => void) {

    if (!item.id)
        item.id = item.title.toLocaleLowerCase().replaceAll(' ', '-')
    if (!item.contexts)
        item.contexts = ['all']

    await browser.contextMenus.create(item, () => void browser.runtime.lastError)
    await browser.contextMenus.onClicked.addListener(action)
}



interface PopupChange { url?: string, keep?: boolean }

async function popup(change: PopupChange) {

    const previous = browser.action.getPopup({})
    const changing = change.url ?
        browser.action.setPopup({ popup: change.url }) :
        Promise.resolve()

    const opening = await browser.action.openPopup()
    await changing
    if (!change.keep)
        await browser.action.setPopup({ popup: await previous })

    return opening
}