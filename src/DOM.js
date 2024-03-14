import createList from "./list.js"

export default function DOMHandler() {
    const ul = document.querySelector("#taskList")
    const tasks = createList();
    const title = document.querySelector("#title")
    const description = document.querySelector("#description")
    const dueDate = document.querySelector("#dueDate")
    const priority = document.querySelector("#priority")
    

    const clearList = () => {
        while(ul.firstChild){
            ul.removeChild(ul.firstChild);
        }
    }

    const createListItem = (task) => {
        let li = document.createElement("li");
        li.textContent = task
        ul.appendChild(li);
    }

    const update = () => {
        clearList();
        tasks.array.forEach(function (task) {
            createListItem(task.title);
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
        });

        //add new task to list
        addTaskButton.addEventListener("click", (event) => {
            event.preventDefault
            tasks.addTask(title.value, description.value, dueDate.value, priority.value)
            update()
        })
    }

    return {setupModal, clearList, update}

}
    