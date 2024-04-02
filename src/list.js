import dataBase from './storage.js'

export default function createList(title) {
    let db = dataBase()
    let array = db.getData(title)

    const addTask = (todo) => {
      array.push(todo)
      db.saveData(title, array)
    }

    const removeTask =  (index) => {
      array.splice(index, 1)
      db.saveData(title, array)
    } 

    const editTask = (editedTask, index) => {
        array.splice(index, 1, editedTask)
        db.saveData(title, array)
    }

    const deleteProject = () => {
        db.deleteData(project)
    }

    return {array, addTask, removeTask, editTask, deleteProject, title}
}


