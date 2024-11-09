var form = document.getElementById("resume-form");
var resumeDisplayElement = document.getElementById("resume-display");
form.addEventListener("submit", function (event) {
    event.preventDefault();
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var education = document.getElementById("education").value;
    var experience = document.getElementById("experience").value;
    var skills = document.getElementById("skills").value;
    var resumeHTML = "\n    <h2><b>Resume</b></h2>\n    <h3>Personal information</h3>\n    <p><b>Name:</b>".concat(name, "</P>\n    <p><b>email:</b>").concat(email, "</P>\n    <p><b>phone:</b>").concat(phone, "</P>\n\n    <h3>Education</p>\n    <p>").concat(education, "</p>\n\n    <h3>Experience</p>\n    <p>").concat(experience, "</p>\n\n    <h3>Skills</p>\n    <p>").concat(skills, "</p>\n    ");
    if (resumeDisplayElement) {
        resumeDisplayElement.innerHTML = resumeHTML;
    }
    else {
        console.error("The resume display element is missing.");
    }
});
