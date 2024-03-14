export default function createList() {
    let array = []

    const addTask = (title, description, date, priority, status="incomplete") => {
      array.push({title, description, date, priority, status})
    }

    const removeTask =  (index) => {
      array.splice(index, 1)
    } 

    return {array, addTask, removeTask}
}


