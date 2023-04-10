//Man, Lucas is the best

const startBtn = document.getElementById('start');
const endBtn = document.getElementById('end');
const toggleMinBtn = document.getElementById('toggle_minutes');
const timer = document.querySelector('.timer');
const counter = document.querySelector('.counter');

const modal = document.querySelector('.modal');
const modalClose = document.querySelector('.modal-close');
const modalYes = document.querySelector('.modal-yes');


const settingsScreen = document.querySelector('.settingsScreenClass');
const okMan = document.getElementById('ok');
const settingsBtn = document.getElementById('settings-btn');
const pageTitle = document.querySelector('title');

const newTask = document.getElementById('new-task');

const tdLine = document.getElementById('toDoHR');

let taskComplete = 0;
let timeLeft = 1500; 
let sessionCount = 0;
let intervalId;

let isLight = false;

function startTimer() {
  intervalId = setInterval(() => {
    timeLeft--;
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;
    timer.textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    pageTitle.textContent = `${timer.textContent} - Pomodoro Timer`; // update page title
 
    if (timeLeft === 0) {
      clearInterval(intervalId);
      endBtn.disabled = true;
      startBtn.textContent = 'Start';
      sessionCount++;
    }
  }, 1000);
}

function pauseTimer() {
  clearInterval(intervalId);
  endBtn.disabled = false;
  startBtn.textContent = 'Resume';
}

function resetTimer() {
  clearInterval(intervalId);
  timeLeft = 1500;
  timer.textContent = '25:00';
  endBtn.disabled = true;
  startBtn.textContent = 'Start';
}

startBtn.addEventListener('click', () => {
  if (startBtn.textContent === 'Start') {
    startBtn.textContent = 'Pause';
    endBtn.disabled = false;
    startTimer();
  } else if (startBtn.textContent === 'Pause') {
    startBtn.textContent = 'Resume';
    pauseTimer();
  } else if (startBtn.textContent === 'Resume') {
    startBtn.textContent = 'Pause';
    startTimer();
  }
});



endBtn.addEventListener('click', () => {
	modal.style.display = 'block';  
	startBtn.textContent = 'Resume';
    	pauseTimer();
});


modalClose.addEventListener('click', function() {
  modal.style.display = 'none';
	startBtn.textContent = 'Pause';
    startTimer();
});

modalYes.addEventListener('click', function() {
  counter.textContent = sessionCount.toString();
  resetTimer();
  modal.style.display = 'none';
});

settingsBtn.addEventListener('click', () => {
  settingsScreen.style.display = 'block';
  settingsScreen.classList.add('show');
  startBtn.textContent = 'Resume';
  pauseTimer();
});


okMan.addEventListener('click', () => {
  settingsScreen.style.display = 'none';
  startBtn.textContent = 'Pause';
    startTimer();
});





toggle_minutes.addEventListener('click', () => {
  clearInterval(intervalId);
  if (timer.textContent === '25:00')
  {
    timeLeft = 3000;
  timer.textContent = '50:00';
  toggleMinBtn.textContent = '50:00';
  endBtn.disabled = true;
  startBtn.textContent = 'Start';
  }
  else{
    timeLeft = 1500;
  timer.textContent = '25:00';
  toggleMinBtn.textContent = '25:00';
  endBtn.disabled = true;
  startBtn.textContent = 'Start';
  }
  
});

// Get the input field and task list
const newTaskInput = document.getElementById("new-task");
const taskList = document.getElementById("task-list");

// Add a new task to the list
function addTask() {
    // Get the task name
    const taskName = newTaskInput.value;

    if (taskName.trim() === "") {
      return;
  }

    // Create a new list item and checkbox
    const listItem = document.createElement("li");
    listItem.className = "listItems";
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.addEventListener("change", toggleTask);
    //listItem.appendChild(checkbox);

    // Create a new label with the task name
    const label = document.createElement("label");

    checkbox.style.float = "left";
    label.style.float = "left";
    label.innerText = " "+ taskName;
    console.log(taskName);
    listItem.appendChild(label);

    // Create a new delete button
    const deleteButton = document.createElement("button");
    deleteButton.id = "deleteBtn";
    deleteButton.innerText = "✕";
    deleteButton.className = "delete";
    deleteButton.style.float = "right";
    deleteButton.addEventListener("click", deleteTask);
    listItem.appendChild(deleteButton);

    //create checkmark button
    const checkBtn = document.createElement("button");
    checkBtn.id = "checkBtn";
    checkBtn.innerText = "✔";
    checkBtn.className = "checkBtnClass";
    checkBtn.style.float = "right";
    checkBtn.addEventListener("click", deleteTask);
    listItem.appendChild(checkBtn);

    // Add the new list item to the task list
    taskList.appendChild(listItem);

    // Clear the input field
    newTaskInput.value = "";
    
}

// Toggle the completed status of a task
function toggleTask(event) {
    const listItem = event.target.parentNode;
    listItem.classList.toggle("completed");
}

// Delete a task from the list
function deleteTask(event) {
    const listItem = event.target.parentNode;
    taskList.removeChild(listItem);
}

function shineSC()
{
  var sC = document.querySelector('.sC');
  sC.classList.toggle('scShine');
  var container = document.querySelectorAll('.container');

  //container.classList.toggle('tShine');
  var buttons = document.getElementsByTagName('button');
  var taskProp = document.getElementById('new-task');
  var listItems = document.querySelectorAll('.listItems');
  
  //closing button
  var modalC = document.querySelectorAll('.modal-content');

  //All lines
  var lineArr = document.getElementsByTagName('hr');


  if (isLight)
  {

    for (var i = 0; i < lineArr.length; i++)
    {
      lineArr[i].style.background = "white";
      lineArr[i].style.transition = "all 1s ease-in-out";
    }



    //container.length = 1, also modal;
    for (var i = 0; i < container.length; i++)
    {
      modalC[i].style.background = "#242424";
      container[i].style.color = "white";
      container[i].style.background = "black";
      container[i].style.transition = "all 1s ease-in-out";
    }
    isLight = false;
    for (var i = 0; i < buttons.length; i++) {
      buttons[i].style.color = "white";
      if (buttons[i].disabled)
      {
        buttons[i].style.color = "#757373";
      }
    }

    taskProp.style.color = "white";
    taskProp.style.transition = "all 1s ease-in-out";
   
    for (let i = 0; i < listItems.length; i++) {
      listItems[i].style.color = "white";
      listItems[i].style.transition = "all 1s ease-in-out";
   
      
    }
  }
  else{
    isLight = true;
    for (var i = 0; i < lineArr.length; i++)
    {
      lineArr[i].style.background = "black";
      lineArr[i].style.transition = "all 1s ease-in-out";
    }


    for (var i = 0; i < container.length; i++)
    {
      container[i].style.color = "black";
      container[i].style.background = "white";
      container[i].style.transition = "all 1s ease-in-out";
    }
    for (var i = 0; i < buttons.length; i++) {
      buttons[i].style.color = "black";
      if (buttons[i].disabled)
      {
        buttons[i].style.color = "#c9c9c9";
      }

      buttons[i].style.transition = "color 1s ease-in-out";
    }
    taskProp.style.color = "black";
    taskProp.style.transition = "background 1s ease-in-out";
    
    
    for (let i = 0; i < listItems.length; i++) {
      listItems[i].style.color = "black";
      listItems[i].style.transition = "background 1s ease-in-out";
    }
    
    
  }



  

  
}



