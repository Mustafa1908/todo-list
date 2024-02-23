import CreateToDoTask from "./createTodoTask";
import getProjectIndexValue from "./getProjectIndexValue";
import createInputForAddProject from "./createInputsForAddProject";
import createExampleProject from "./createExampleProject";
import calculateTimeBetweenDates from "./calculateTimeBetweenDates";
import "./styles.css"

const user = new CreateToDoTask("user");
let projectIndex = -1;



document.addEventListener("DOMContentLoaded", () => {
  createExampleProject();
  user.createTaskArray();
  user.createDateArray();
  projectIndex++;

  let dateExample = calculateTimeBetweenDates("2024/02/19");

  for (let i = 1; i <= 5; i++) {
    user.addTaskToArray(0, "Example Task" + i);
    user.addDateToArray(0, dateExample);
  }
    
    user.renderToDoTask(0, 5);
}) 



document.addEventListener("click", (e) => {
    const target = e.target.closest(".add-project"); 
    if(target){
        createInputForAddProject();
        user.createTaskArray();
        user.createDateArray();
        projectIndex++;
    }
  });



  document.addEventListener("click", (e) => {
    const target = e.target.closest(".add-task"); 
  
    if(target){
      let projectInputContainer = document.querySelector("#add-task-container");
      let taskInput = document.createElement("input");
      let dateInput = document.createElement("input");
      let submitTask = document.createElement("submit-task");
      
      taskInput.type = "text";
      dateInput.type = "date";
      submitTask.innerHTML = `<button type="submit" id="submit-task">submit</button>`;

      projectInputContainer.appendChild(taskInput);
      projectInputContainer.appendChild(dateInput);
      projectInputContainer.appendChild(submitTask);
      taskInput.focus();
      

      document.addEventListener("click", (e) => {
        const target = e.target.closest("#submit-task"); 
        if(target){
          e.preventDefault();
          if (taskInput.value === "") {
            return;
          }

          let differenceBetweenDates = calculateTimeBetweenDates(dateInput.value);
          let projectTasksContainer = document.querySelector(".project-tasks-container");
          
          projectTasksContainer.innerHTML = "";

          user.addTaskToArray(projectIndex, taskInput.value);
          user.addDateToArray(projectIndex, differenceBetweenDates);
          user.renderToDoTask(projectIndex, user.showTaskArrayLength(projectIndex));
          taskInput.value = ""

          taskInput.remove();
          dateInput.remove();
          submitTask.remove();
          user.showDateArray();
        }
      });
    }
  });


    
  function showProjects(projectName, projectDescription) {
  projectName.addEventListener('click', e => {
      projectIndex = getProjectIndexValue(projectName);
      let taskArrayLength = user.showTaskArrayLength(projectIndex);
      user.renderToDoTask(projectIndex, taskArrayLength);
      let projectDisplayName = document.querySelector(".project-name");
      let projectDisplayDescription = document.querySelector(".project-description");
      let projectTasksContainer = document.querySelector(".project-tasks-container");

      projectTasksContainer.innerHTML = "";
      user.renderToDoTask(projectIndex, taskArrayLength);
      var elem = e.target.closest("[class]");

      if (elem && elem.getAttribute('class') !== 'root') {
      }  projectDisplayName.innerHTML = `<span class="project-name">${projectName.innerText}</span>`;
      projectDisplayDescription.innerHTML = `<span class="project-description">${projectDescription}</span>`;
  });
}




  document.addEventListener("click", function(e){
  const target = e.target.closest(".trash-icon"); 
  const taskContainer = e.target.closest(".task-infos-container");
  if(target){
    let indexProject = getProjectIndexValue(taskContainer);
    let projectTasksContainer = document.querySelector(".project-tasks-container");
    let taskArrayLength;
  
    user.removeTaskAndDateFromArray(projectIndex, indexProject);
    user.showArray();
    user.showDateArray();

    taskArrayLength = user.showTaskArrayLength(projectIndex);
    projectTasksContainer.innerHTML = "";

    user.renderToDoTask(projectIndex, taskArrayLength);
  } 
});



export default showProjects
