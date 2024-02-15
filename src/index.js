import addProjects from "./addProjects";
import CreateToDoTask from "./createTodoTask";
import getProjectIndexValue from "./getProjectIndexValue";
import "./styles.css"

const user = new CreateToDoTask("mustafa");
let projectIndexValue = -1;

document.addEventListener("click", (e) => {
    const target = e.target.closest(".add-project"); 
    if(target){
      addProjects();
      user.createTaskArray();
      user.showArray();
      projectIndexValue++;
    }
  });



  document.addEventListener("click", (e) => {
    const target = e.target.closest(".add-task"); 
  
    if(target){
      let userTask = prompt("Enter a task");
      user.addTaskToArray(projectIndexValue, userTask);
      user.showArray();
    }
  });



  
    
  function showProjects(projectName, projectDescription) {
  projectName.addEventListener('click', e => {
      let projectDisplayName = document.querySelector(".project-name");
      let projectDisplayDescription = document.querySelector(".project-description");
      var elem = e.target.closest("[class]");
      if (elem && elem.getAttribute('class') !== 'root') {
      }  projectDisplayName.innerHTML = `<span class="project-name">${projectName.innerText}</span>`;
      projectDisplayDescription.innerHTML = `<span class="project-description">${projectDescription}</span>`;
  });
}


export default showProjects
