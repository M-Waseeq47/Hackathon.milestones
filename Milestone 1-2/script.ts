const toggleskills = document.getElementById("toggleskills") as HTMLButtonElement
const skill = document.getElementById("Skills") as HTMLElement

toggleskills.addEventListener("click", ()=>{
    if(skill.style.display === "none"){
        skill.style.display = "block" 
    } else {
        skill.style.display = "none"
    }
    
});