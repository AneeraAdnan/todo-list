let inputtask = document.getElementById('input-task');
let tasklist = document.getElementById('task-list');

function addTask() {
  if (inputtask.value == "") {
    
    alert("No task to add");
    return;
  }
  else {

    let task = document.createElement('li'); 

    let taskText = document.createElement('span');
    taskText.innerText = inputtask.value;

    let deleteBtn = document.createElement('button');
    deleteBtn.innerText = "Delete";
    deleteBtn.onclick = () => task.remove();

    let editBtn = document.createElement('button');
    editBtn.innerText = "Edit";
    editBtn.onclick = () => editTask(task, taskText, editBtn);

    task.appendChild(taskText);
    task.appendChild(editBtn);
    task.appendChild(deleteBtn);

    tasklist.appendChild(task);
    inputtask.value = "";
  }

}


function editTask(task, taskText, editBtn) {
  const input = document.createElement('input');
  input.type = "text";
  input.value = taskText.innerText;

  task.replaceChild(input, taskText);
  editBtn.innerText = "Save";

  editBtn.onclick = () => saveTask(task, input, taskText, editBtn);
}


function saveTask(task, input, taskText, editBtn) {
  taskText.innerText = input.value;
  task.replaceChild(taskText, input);
  editBtn.innerText = "Edit";


  editBtn.onclick = () => editTask(task, taskText, editBtn);
}
