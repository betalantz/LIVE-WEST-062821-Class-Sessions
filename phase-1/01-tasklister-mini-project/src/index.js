document.addEventListener("DOMContentLoaded", () => {
  // your code goes here
  let form = document.getElementById('create-task-form')
  form.addEventListener('submit', newTask)
});


const newTask = function(event) {
  event.preventDefault()
  let input = event.target.description.value
  let color = event.target.selectPriority.value
  let date = event.target.dueDate.value
  appendTask(input, color, date)
  event.target.description.value = ''
  event.target.dueDate.value = ''
}

const appendTask = function(input, color, date) {
  // variable declaration, selectors, new elements
  let ul = document.getElementById('tasks')
  let li = document.createElement('li')
  let deleteBtn = document.createElement('button')
  let editBtn = document.createElement('button')
  
  // assigning values and attributes
  deleteBtn.innerText = 'X'
  editBtn.innerText = 'EDIT'
  li.innerText = `${date}: ${input} `
  li.id = input
  li.data = date
  li.style.color = color

  // appending
  li.append(deleteBtn, editBtn)
  ul.appendChild(li)

  // event listeners
  editBtn.addEventListener('click', () => editForm(li))
  deleteBtn.addEventListener('click', () => li.remove())
}

const editForm = function(li) {
  let form = document.createElement('form')
  let inputField = document.createElement('input')
  let submitBtn = document.createElement('input')

  inputField.type ='text'
  inputField.name = 'editTask'
  inputField.placeholder = li.id

  submitBtn.type = 'submit'
  submitBtn.value = 'Change'

  form.append(inputField, submitBtn)
  li.append(form)

  form.addEventListener('submit', (e) => editTask(e, li))

}

const editTask = function(e, li) {
  e.preventDefault()
  
  // instead of recreating buttons, I can grab the existing buttons before overwriting them
  let deleteBtn = li.querySelector(':nth-child(1)')
  let editBtn = li.querySelector(':nth-child(2)')
  
  const edited = e.target.editTask.value
  li.innerText = `${li.data}: ${edited} `
  li.id = edited
  li.append(deleteBtn, editBtn)

}

