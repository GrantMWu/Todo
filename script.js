function createHeader () {
    const title = document.createElement('h1')
    title.textContent = "Todo"
    document.body.appendChild(title)
}

function addButton () {
    const addButton = document.createElement('button')
    addButton.textContent = "add item"
    addButton.addEventListener('click', showModal)
    document.body.appendChild(addButton)
}

function showModal() {
    const updateButton = document.getElementById("addTask");
    const cancelButton = document.getElementById("cancel");
    const dialog = document.getElementById("taskDialog");
    dialog.returnValue = "addedTask";


    // Update button opens a modal dialog
    updateButton.addEventListener("click", () => {
    dialog.showModal();
    openCheck(dialog);
    });

    // Form cancel button closes the dialog box
    cancelButton.addEventListener("click", () => {
    dialog.close("no task added");
    openCheck(dialog);
    });

    dialog.showModal()
    openCheck(dialog)
}

function openCheck(dialog) {
  if (dialog.open) {
    console.log("Dialog open");
  } else {
    console.log("Dialog closed");
  }
}

createHeader()
addButton()


