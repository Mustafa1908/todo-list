function getProjectIndexValue(projectName) {
    let projectIndexValue = projectName.dataset.index;
    projectIndexValue = projectIndexValue.charAt(projectIndexValue.length - 1);
    return projectIndexValue;
}



export default getProjectIndexValue