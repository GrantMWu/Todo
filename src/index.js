import createList from './list.js'
import DOMHandler from './DOM.js'
import './styles/style.css'
import extractData from './storage.js'

let DOM = DOMHandler()
DOM.renderMain()
DOM.renderSide()
