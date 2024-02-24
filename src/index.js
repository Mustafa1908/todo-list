import CreateToDoTask from "./createTodoTask";
import createInputForAddProject from "./createInputsForAddProject";
import createExampleProject from "./createExampleProject";
import deleteTask from "./deleteTask";
import editTask from "./editTask";
import addTask from "./addTask";
import showProjects from "./showProjects";
import "./styles.css"


export const user = new CreateToDoTask("user");
export let projectIndex = -1;



document.addEventListener("DOMContentLoaded", () => {
  createExampleProject();
  projectIndex++;
}) 


document.addEventListener("click", (e) => {
    const target = e.target.closest(".add-project"); 
    if(target){
        createInputForAddProject();
        projectIndex++;
    }
  });



  document.addEventListener("click", (e) => {
    const target = e.target.closest(".add-task"); 
  
    if(target){
      addTask(projectIndex);
    }
  });


  export function setProjectIndex(currentProjectIndex) {
    projectIndex = currentProjectIndex;
  }
  



  document.addEventListener("click", (e) => {
    const target = e.target.closest(".trash-icon");
    if(target) {
      const taskContainer = e.target.closest(".task-infos-container");
      deleteTask(projectIndex, taskContainer);
    }
  });



  document.addEventListener("DOMContentLoaded", () => {
    editTask();
  });



export default showProjects
