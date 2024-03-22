export default function createList() {
    let array = []

    const addTask = (title, description, date, priority, status="incomplete") => {
      array.push({title, description, date, priority, status})
    }

    const removeTask =  (index) => {
      array.splice(index, 1)
    } 

    const editTask = (title, description, date, priority, index) => {
        const editedTask = {title,description, date, priority}
        array.splice(index, 1, editedTask)
    }

    return {array, addTask, removeTask, editTask}
}


