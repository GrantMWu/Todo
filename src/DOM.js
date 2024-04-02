import createList from "./list.js"

export default function DOMHandler() {
    const taskList = document.querySelector("#taskList")
    const projectList = document.querySelector('#projectList')
    let tasks;
    const projects = createList('projects')

    
    //updates a list by taking in a HTML element to update and a list object that is updating
    const update = (listElement, createItemFunction, listObj) => {
        clearList(listElement);
        listObj.array.forEach(function (item) {
            createItemFunction(item, listElement, createItemFunction, listObj);
        })
    }

    //accepts HTML element as input and clears all children Element
    const clearList = (listElement) => {
        while(listElement.firstChild){
            listElement.removeChild(listElement.firstChild);
        }
    }

    const createEditButton = () => {
        const editButton = document.createElement("button")
        editButton.classList.add("editButton")
        editButton.innerHTML = "<i class='fa fa-edit'></i>"
        
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
                update(taskList, createListItem, tasks)
                document.querySelector("form").reset()
                dialog.close()
            }
        })
    }

    const createDeleteButton = () => {
        const deleteButton = document.createElement("button")
        deleteButton.classList.add("deleteButton")
        deleteButton.innerHTML = '<i class="fa fa-trash-o" aria-hidden="true"></i>'

        return deleteButton
    }
    
    const deleteItem = (item, listElement, createItem, list) => {
        let index = list.array.indexOf(item)
        list.removeTask(index)
        update(listElement, createItem, list)
    }

    const createListItem = (task) => {
        let todo = document.createElement("div");
        todo.classList.add("todo")

        let taskName = document.createElement("div")
        taskName.classList.add("taskName");
        taskName.textContent = task.title

        let buttons = document.createElement("div")
        buttons.classList.add("todoButtons")

        const editButton = createEditButton()
        editButton.addEventListener('click', function() {
            editTodo(task)
        })

        //create a delete button for item
        const deleteButton = createDeleteButton()
        deleteButton.addEventListener('click', function () {
            deleteItem(task, taskList, createListItem, tasks)
        })

        buttons.appendChild(editButton)
        buttons.appendChild(deleteButton)
        todo.appendChild(taskName)
        todo.appendChild(buttons)
        taskList.appendChild(todo);
    }

    const createProjectItem = (project, listElement, createItem, list) => {
        let projectCont = document.createElement("li");
        projectCont.classList.add("project");

        let projectName = document.createElement('div')
        projectName.textContent = project
        projectName.addEventListener('click', function() {
            renderMain(project)
        })

        let buttons = document.createElement('div')
        buttons.classList.add('projectButtons')

        const deleteButton = createDeleteButton()
        deleteButton.addEventListener('click', function () {
            deleteItem(project, listElement, createItem, list)
            localStorage.removeItem(project)
            if (tasks.title == project) {
                renderMain("today")
            }
        })

        buttons.appendChild(deleteButton)

        projectCont.appendChild(projectName)
        projectCont.appendChild(buttons)

        const projectList = document.querySelector("#projectList");
        projectList.appendChild(projectCont)
    }

    const renderMain = (project) => {
        //change tasks
        tasks = createList(project)

        //change header
        let header = document.getElementById("project")
        header.textContent = project

        //setup task dialog
        const title = document.querySelector("#title")
        const description = document.querySelector("#description")
        const dueDate = document.querySelector("#dueDate")
        const priority = document.querySelector("#priority")
        const newTaskButton = document.getElementById("newTask");
        const cancelButton = document.getElementById("cancel");
        const addTaskButton = document.getElementById("addTask")
        const dialog = document.getElementById("newTaskDialog");
        
        newTaskButton.addEventListener("click", () => {
          dialog.showModal();
        });
        
        cancelButton.addEventListener("click", () => {
          dialog.close();
          document.querySelector("form").reset()
        });

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
                update(taskList, createListItem, tasks)
                document.querySelector("form").reset()
                dialog.close()
            }
        })

        update(taskList, createListItem, tasks)
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
            document.querySelector("form").reset()
        });

        addProjectButton.addEventListener('click', (event) => {
            event.preventDefault()
            if (projectTitle.validity.valid && projectDescription.validity.valid) {
                projects.addTask(projectTitle.value)
                console.log(projects.array)
                update(projectList, createProjectItem, projects)
                document.querySelector("form").reset()
                dialog.close()
            }

        })

        update(projectList, createProjectItem, projects)
    }

    return {clearList, update, renderMain, renderSide}

}
    