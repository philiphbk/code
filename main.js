// // Object literals

// const people = [
//   {
//     firstName: "John",
//     lastName: "Smith",
//     age: 40,
//   },
//   {
//     firstName: "Wale",
//     lastName: "Bayo",
//     age: 40,
//   },
// ];

// people.forEach((person) => console.log(person.firstName));

// // Conditionals

// let animal = 'cat';
// const likesCats = animal === 'cat' ? true : false;
// console.log(likesCats);

// // Events

// const btn = document.getElementById('myBtn');
// btn.addEventListener('click')


const newTask = document.querySelector('#new-task-input');
const addTaskBtn = document.querySelector('.add-task-btn');
const removeCompleteBtn = document.querySelector('.remove-complete-btn');
const taskList = document.querySelector('.task-list');
// const taskTemp = document.getElementById('task-template');
// const taskTemplate = taskTemp.import.querySelector('task-template');
const taskTemplate = document.querySelector('#task-template');

let id = 1;

newTask.addEventListener('keyup', (e) => {
  if (e.keyCode === 13 && inputValid()){
    addTask();
  }
});

addTaskBtn.addEventListener('click', () => {
  if (inputValid()) {
    addTask();
  }
});

removeCompleteBtn.addEventListener('click', () => {
  const tasks = document.querySelector('.task');
  tasks.forEach(task => {
    const checked = task.querySelector('input').checked;
    if(checked){
      task.remove();
    }
  });
});

function addTask() {
  const taskElement = document.importNode(taskTemplate.textContent, true);
  const checkbox = taskElement.querySelector('input');
  checkbox.id = id;
  const label = taskElement.querySelector('label');
  label.htmlFor = id;
  label.append(newTask.value);
  taskList.appendChild(taskElement);
  newTask.value = '';
  id++;
}

function inputValid() {
  return newTask.value !== '';
}




