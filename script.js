import checkComplete from "./componentes/checkcomplete.js";
import deleteIcon from "./componentes/deteleicon.js";

const btn = document.querySelector('[data-form-btn]');

const createTask =(evento) => {
  evento.preventDefault();
  const input = document.querySelector('[data-form-input]');
  const value = input.value;
  const list = document.querySelector('[data-list]');
  const task = document.createElement('li');
  task.classList.add("card");
  input.value = "";
  const taskContent = document.createElement('div');
  const titleTask = document.createElement('span');
  titleTask.classList.add("task");
  titleTask.innerText = value;
  taskContent.appendChild(checkComplete());
  taskContent.appendChild(titleTask);
  taskContent.appendChild(deleteIcon());
  //task.innnerHTML=content;
  task.appendChild(taskContent);
  list.appendChild(task);
};

//Arrow functions o funciones anonimas
btn.addEventListener("click", createTask);
