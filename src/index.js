import addProjects from "./addProjects";
import "./styles.css"


document.addEventListener("click", (e) => {
    const target = e.target.closest(".add-project"); 
  
    if(target){
      addProjects();
    }
  });

