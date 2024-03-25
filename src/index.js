import createList from './list.js'
import DOMHandler from './DOM.js'
import './styles/style.css'
import extractData from './storage.js'

let DOM = DOMHandler()
DOM.renderMain()

// let list = createList()
// console.log(list)

// let todo = [
//   {
//   title: "test",
//   description: "this is a test",
//   date: "03/22/2024",
//   priority: "low"
// },
// {
//   title: "test 2",
//   description: "this is another test",
//   date: "03/22/2024",
//   priority: "low"
// }]

// list.array = todo

// console.log(list)
