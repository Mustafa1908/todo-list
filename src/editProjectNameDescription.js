import { user } from ".";



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


    document.addEventListener("click", function submitChanges(e)  {
        const target = e.target.closest("#submit-changes"); 
        if(target){
            if (user.returnProjectArrayIndex(projectName) == 0) {
                projectEditIcon.innerHTML = `<span class="material-symbols-outlined project-edit-icon">edit</span>`
                projectDisplayName.innerText = projectNameInput.value;
                user.modifyProjectDescription(0, projectDescriptionInput.value);
                projectDisplayDescription.innerText = user.returnProjectDescriptionValue(0);

                user.addCurrentIndexToArray(user.returnProjectArrayIndex(projectName));
                user.modifyProjectName(0, projectNameInput.value);
                user.renderProjectName();
                document.removeEventListener("click", submitChanges);
                return;
            }

            projectEditIcon.innerHTML = `<span class="material-symbols-outlined project-edit-icon">edit</span>`
            projectDisplayName.innerText = projectNameInput.value;
            user.modifyProjectDescription(user.returnProjectArrayIndex(projectName), projectDescriptionInput.value);
            projectDisplayDescription.innerText = user.returnProjectDescriptionValue(user.returnProjectArrayIndex(projectName));
           
            user.addCurrentIndexToArray(user.returnProjectArrayIndex(projectName));
            user.modifyProjectName(user.returnProjectArrayIndex(projectName), projectNameInput.value);
            user.renderProjectName()
            document.removeEventListener("click", submitChanges);
        }
      });
}



export default editProjectNameDescription;