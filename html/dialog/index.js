
// this is a solution for collecting information within the page,
// not sending it to a server.
// Submitting to the server would likely be a bit easier.

let myLibrary = []

// this is the 
const dialog = document.querySelector("dialog")
const openDialogButton = document.querySelector("#open-dialog-button")

openDialogButton.addEventListener("click", () => {
  dialog.showModal()
  // The css for this id removes display: none, so styling has to be applied after showModal
  dialog.setAttribute("id","dialog-display")
})


let formCancelButton = document.querySelector("#form-cancel")
formCancelButton.addEventListener("click", (event) => {
  // prevent usual behaviour of form submit to send information to a server
  event.preventDefault();
  // return the modal to display: none
  dialog.setAttribute("id","add-book-dialog-no-display")
  dialog.close();
  openDialogButton.focus();
})

let addBookForm = document.querySelector("form")
addBookForm.addEventListener("submit", (event) => {
  // prevent usual behaviour of form submit to send information to a server
  event.preventDefault();
  addFunction() // add the data to whatever
  resetForm()
  dialog.removeAttribute("id","add-book-dialog")
  dialog.close();
  openDialogButton.focus();
})


// Book object constructor
function Book(name, author, readOrNot, synopsis) {
  this.name = name;
  this.author = author;
  this.readOrNot = readOrNot
  this.synopsis = synopsis
}

function resetForm() {
  document.querySelector("#form-book-name").value = "";
  document.querySelector("#form-book-author").value = "";
  document.querySelector("#form-book-synopsis").value = "";
  document.querySelector("#form-book-read-or-not").checked = false;
}

function addFunction() {
  console.log("Adding info")
}


