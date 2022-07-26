import { GlobalStyle } from '../src/components/Globals'

const setStyleSheet = (url) => {
    const makeCssNode = () => {
        const domElement = document.createElement('link')
        domElement.setAttribute("rel", "stylesheet")
        domElement.setAttribute("type", "text/css")
        domElement.setAttribute('id', 'colorTheme')
        domElement.setAttribute("href", url)
        return domElement
    }

    const applyCSS = () => {
        //remove previous node
        const prev = document.getElementById('colorTheme')
        if (prev) {
            prev.remove()
        }
        //new stylesheet node
        const node = makeCssNode()
        //append updated node to body
        document.getElementsByTagName('head')[0].appendChild(node)
    }
    applyCSS()
}


export const cssDecorator = (Story, context) => {

    const url = (context.globals.theme === 'light') ? 'styles-light.css' : 'styles-dark.css'
    setStyleSheet(url)

    return <>
        <GlobalStyle />
        <Story />
    </>
}


