import createList from "./list.js"

export default function dataBase() {
    const getData = () => {
        let tasksArray;
    
        if(!localStorage.getItem('tasks')) {
            tasksArray = []
            localStorage.setItem('tasks', JSON.stringify(tasksArray))
        } else {
            tasksArray = JSON.parse(localStorage.getItem('tasks'))
        }
    
        return tasksArray
    }

    const saveData = (tasksArray) => {
        localStorage.setItem('tasks', JSON.stringify(tasksArray))
    }

    return {getData, saveData}

}

//return { getData }