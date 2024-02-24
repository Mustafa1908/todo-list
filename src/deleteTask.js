import getProjectIndexValue from "./getProjectIndexValue";
import { user } from ".";


function deleteTask(projectIndex, taskContainer) { 
      let indexProject = getProjectIndexValue(taskContainer);
      let projectTasksContainer = document.querySelector(".project-tasks-container");
      let taskArrayLength;
      
      user.removeTaskAndDateFromArray(projectIndex, indexProject);

      taskArrayLength = user.showTaskArrayLength(projectIndex);
      projectTasksContainer.innerHTML = "";
      
      user.renderToDoTask(projectIndex, taskArrayLength);
}


  export default deleteTask