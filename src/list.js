import dataBase from './storage.js'

export default function createList(title) {
    //let db = dataBase()
    //let array = db.getData()
    let array = [];

    const addTask = (todo) => {
      array.push(todo)
      //db.saveData(array)
    }

    const removeTask =  (index) => {
      array.splice(index, 1)
      //db.saveData(array)
    } 

    const editTask = (editedTask, index) => {
        array.splice(index, 1, editedTask)
        //db.saveData(array)
    }

    return {array, addTask, removeTask, editTask, title}
}


