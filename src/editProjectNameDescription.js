import { user } from ".";

function editProjectNameDescription() {
    let projectDisplayName = document.querySelector(".project-name");
    let projectDisplayDescription = document.querySelector(".project-description");

    let projectName = projectDisplayName.innerText;
    let projectDescription = projectDisplayDescription.innerText;

    projectDisplayName.innerHTML = "";
    projectDisplayDescription.innerHTML = "";

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
            projectDisplayName.innerHTML = "";
            projectDisplayDescription.innerHTML = "";

            projectDisplayName.innerText = projectNameInput.value;
            projectDisplayDescription.innerText = projectDescriptionInput.value;

            user.renderProjectName(projectNameInput.value);
        }
      });
}



export default editProjectNameDescription;