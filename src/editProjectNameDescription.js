import showProjects, { user } from ".";

function editProjectNameDescription() {
    let projectDisplayName = document.querySelector(".project-name");
    let projectDisplayDescription = document.querySelector(".project-description");
    let projectEditIcon = document.querySelector(".project-edit-icon");

    let projectName = projectDisplayName.innerText;
    let projectDescription = projectDisplayDescription.innerText;

    projectDisplayName.innerHTML = "";
    projectDisplayDescription.innerHTML = "";
    projectEditIcon.innerHTML = "";

    let projectNameInput = document.createElement("input");
    let projectDescriptionInput = document.createElement("input");
    let submitChanges = document.createElement("button");

    projectNameInput.type = "text";
    projectDescriptionInput.type = "text";
    
    projectNameInput.value = projectName;
    projectDescriptionInput.value = projectDescription;

    submitChanges.innerHTML = `<button type="submit" id="submit-changes">submit</button>`;
  

    projectDisplayName.appendChild(projectNameInput);
    projectDisplayDescription.appendChild(projectDescriptionInput);
    projectDisplayDescription.appendChild(submitChanges);

    document.addEventListener("click", (e) => {
        const target = e.target.closest("#submit-changes"); 
        if(target){
            projectEditIcon.innerHTML = `<span class="material-symbols-outlined project-edit-icon">edit</span>`

            projectDisplayName.innerText = projectNameInput.value;
            user.modifyProjectDescription(user.returnCurrentIndexValue(), projectDescriptionInput.value);
            projectDisplayDescription.innerText = user.returnProjectDescriptionValue(user.returnCurrentIndexValue());
            user.modifyProjectName(user.returnCurrentIndexValue(), projectNameInput.value);
  
            user.renderProjectName(user.returnCurrentIndexValue());
        }
      });
}



export default editProjectNameDescription;