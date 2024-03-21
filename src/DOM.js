import createList from "./list.js"

export default function DOMHandler() {
    const taskList = document.querySelector("#taskList")
    const tasks = createList();
    const title = document.querySelector("#title")
    const description = document.querySelector("#description")
    const dueDate = document.querySelector("#dueDate")
    const priority = document.querySelector("#priority")
    

    const clearList = () => {
        while(taskList.firstChild){
            taskList.removeChild(taskList.firstChild);
        }
    }

    const createListItem = (task) => {
        let todo = document.createElement("div");
        todo.classList.add("todo")

        let taskName = document.createElement("div")
        taskName.classList.add("taskName");
        taskName.textContent = task.title

        let buttons = document.createElement("div")
        buttons.classList.add("buttons")

        const editButton = document.createElement("button")
        editButton.classList.add("editButton")
        editButton.textContent = "edit"

        const deleteButton = document.createElement("button")
        deleteButton.classList.add("deleteButton")
        deleteButton.textContent = "delete"
        deleteButton.addEventListener('click', function () {
            deleteTodo(task)
        })

        buttons.appendChild(editButton)
        buttons.appendChild(deleteButton)
        todo.appendChild(taskName)
        todo.appendChild(buttons)
        taskList.appendChild(todo);
        console.log("added")
    }

    const deleteTodo = (task) => {
        let index = tasks.array.indexOf(task)
        tasks.removeTask(index)
        update()
    }

    const update = () => {
        clearList();
        tasks.array.forEach(function (task) {
            createListItem(task);
        })
    }

    const setupModal = () => {
        const updateButton = document.getElementById("newTask");
        const cancelButton = document.getElementById("cancel");
        const addTaskButton = document.getElementById("addTask")
        const dialog = document.getElementById("taskDialog");
        dialog.returnValue = "task";
        
        // Update button opens a modal dialog
        updateButton.addEventListener("click", () => {
          dialog.showModal();
        });
        
        // Form cancel button closes the dialog box
        cancelButton.addEventListener("click", () => {
          dialog.close();
          document.querySelector("form").reset()
        });

        //add new task to list
        addTaskButton.addEventListener("click", (event) => {
            event.preventDefault()
            if (title.validity.valid && description.validity.valid && dueDate.validity.valid) {
                tasks.addTask(title.value, description.value, dueDate.value, priority.value)
                update()
                document.querySelector("form").reset()
                dialog.close()
            }
        })
    }


    return {setupModal, clearList, update}

}
    