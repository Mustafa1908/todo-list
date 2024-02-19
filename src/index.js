import CreateToDoTask from "./createTodoTask";
import getProjectIndexValue from "./getProjectIndexValue";
import createInputForAddProject from "./createInputsForAddProject";
import addProjects from "./addProjects";
import "./styles.css"



const user = new CreateToDoTask("user");
let projectIndexValue = -1;



document.addEventListener("click", (e) => {
    const target = e.target.closest(".add-project"); 
    if(target){
        createInputForAddProject()
        user.createTaskArray();
        projectIndexValue++;
    }
  });



  document.addEventListener("click", (e) => {
    const target = e.target.closest(".add-task"); 
  
    if(target){
      let projectInputContainer = document.querySelector("#add-task-container");
      let taskInput = document.createElement("input");
      let submitTask = document.createElement("submit-task");

      taskInput.innerHTML = `<input type="text">`
      submitTask.innerHTML = `<button type="submit" id="submit-task">submit</button>`

      projectInputContainer.appendChild(taskInput);
      projectInputContainer.appendChild(submitTask);
      taskInput.focus();
      

      document.addEventListener("click", (e) => {
        const target = e.target.closest("#submit-task"); 
        if(target){
          e.preventDefault();
          if (taskInput.value === "") {
            return;
          }
          
          let projectTasksContainer = document.querySelector(".project-tasks-container");
          projectTasksContainer.innerHTML = "";

          user.addTaskToArray(projectIndexValue, taskInput.value);
          user.renderToDoTask(projectIndexValue, user.showTaskArrayLength(projectIndexValue));
          taskInput.value = ""
          
          taskInput.remove();
          submitTask.remove();
        }
      });
    }
  });

    
  function showProjects(projectName, projectDescription) {
  projectName.addEventListener('click', e => {
      let projectIndex = getProjectIndexValue(projectName);
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



export default showProjects
