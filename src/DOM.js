import createList from "./list.js"

export default function DOMHandler() {
    const taskList = document.querySelector("#taskList")
    const projectList = document.querySelector('#projectList')
    const tasks = createList("demo task")
    const projects = []
    
    const update = (listElement, createItem, listArray) => {
        clearList(listElement);
        listArray.forEach(function (item) {
            createItem(item);
        })
    }

    const clearList = (listElement) => {
        while(listElement.firstChild){
            listElement.removeChild(listElement.firstChild);
        }

    }

    const createEditButton = (task) => {
        const editButton = document.createElement("button")
        editButton.classList.add("editButton")
        editButton.innerHTML = "<i class='fa fa-edit'></i>"
        editButton.addEventListener('click', function() {
            editTodo(task)
        })

        return editButton
    }

    const editTodo = (task) => {
        const title = document.querySelector("#editTitle")
        const description = document.querySelector("#editDescription")
        const dueDate = document.querySelector("#editDueDate")
        const priority = document.querySelector("#editPriority")

        const dialog = document.getElementById("editDialog");
        title.value = task.title
        description.value = task.description
        dueDate.value = task.date
        priority.value = task.priority
        let index = tasks.array.indexOf(task)
     
        dialog.showModal()

        //add button functionality 
        const cancelButton = document.querySelector("#editCancel")
        cancelButton.addEventListener("click", () => {
            dialog.close();
            document.querySelector("form").reset()
          });

        const updateButton = document.querySelector("#update")
        updateButton.addEventListener("click", (event) => {
            event.preventDefault()

            if (title.validity.valid && description.validity.valid && dueDate.validity.valid) {
                let editedTask = {
                    title: title.value,
                    description: description.value,
                    date: dueDate.value,
                    priority: priority.value
                }
                tasks.editTask(editedTask, index)
                update(taskList, createListItem, tasks.array)
                document.querySelector("form").reset()
                dialog.close()
            }
        })

    }

    const createDeleteButton = (task) => {
        const deleteButton = document.createElement("button")
        deleteButton.classList.add("deleteButton")
        deleteButton.innerHTML = '<i class="fa fa-trash-o" aria-hidden="true"></i>'
        deleteButton.addEventListener('click', function () {
            deleteTodo(task)
        })

        return deleteButton
    }
    
    const deleteTodo = (task) => {
        let index = tasks.array.indexOf(task)
        tasks.removeTask(index)
        update(taskList, createListItem, tasks.array)
    }

    const createListItem = (task) => {
        let todo = document.createElement("div");
        todo.classList.add("todo")

        let taskName = document.createElement("div")
        taskName.classList.add("taskName");
        taskName.textContent = task.title

        let buttons = document.createElement("div")
        buttons.classList.add("todoButtons")

        const editButton = createEditButton(task)
        const deleteButton = createDeleteButton(task)

        buttons.appendChild(editButton)
        buttons.appendChild(deleteButton)
        todo.appendChild(taskName)
        todo.appendChild(buttons)
        taskList.appendChild(todo);
        console.log("added")
    }

    const createProjectItem = (projectElement) => {
        let project = document.createElement("li");
        project.classList.add("project");
        project.textContent = projectElement

        const projectList = document.querySelector("#projectList");
        projectList.appendChild(project)
    }



    const renderMain = () => {
        const title = document.querySelector("#title")
        const description = document.querySelector("#description")
        const dueDate = document.querySelector("#dueDate")
        const priority = document.querySelector("#priority")
        const newTaskButton = document.getElementById("newTask");
        const cancelButton = document.getElementById("cancel");
        const addTaskButton = document.getElementById("addTask")
        const dialog = document.getElementById("newTaskDialog");
        dialog.returnValue = "task";
        
        // Update button opens a modal dialog
        newTaskButton.addEventListener("click", () => {
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
                newTask =  {
                    title: title.value, 
                    description: description.value, 
                    date: dueDate.value, 
                    priority: priority.value
                }

                tasks.addTask(newTask)
                update(taskList, createListItem, tasks.array)
                document.querySelector("form").reset()
                dialog.close()
            }
        })

        update(taskList, createListItem, tasks.array)
    }

    const renderSide = () => {
        const dialog = document.querySelector("#projectDialog")
        const cancelButton = document.querySelector("#projectCancel")
        const addProjectButton = document.querySelector('#addProject')
        const newProjectButton = document.querySelector("#newProject")
        const projectTitle = document.querySelector("#projectTitle")
        const projectDescription = document.querySelector("#projectDescription")

        newProjectButton.addEventListener('click', () => {
            dialog.showModal();
        })

        cancelButton.addEventListener("click", () => {
            dialog.close();
            document.querySelector("#projectForm").reset()
        });

        addProjectButton.addEventListener('click', (event) => {
            event.preventDefault()
            if (projectTitle.validity.valid && projectDescription.validity.valid) {
                projects.push(projectTitle.value)
                console.log(projects)
                update(projectList, createProjectItem, projects)
                document.querySelector("#projectForm").reset()
                dialog.close()
            }

        })

    }

    return {clearList, update, renderMain, renderSide}

}
    