var toggleskills = document.getElementById("toggleskills");
var skill = document.getElementById("Skills");
toggleskills.addEventListener("click", function () {
    if (skill.style.display === "none") {
        skill.style.display = "block";
    }
    else {
        skill.style.display = "none";
    }
});
