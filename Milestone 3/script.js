// Get references to the form and display area
var form = document.getElementById('resume-form');
var resumeDisplayElement = document.getElementById('resume-display');
//Handle form submission
form.addEventListener('submit', function (event) {
    event.preventDefault(); // prevent page reload
    //colect input values
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var eduacation = document.getElementById('eduacation').value;
    var experience = document.getElementById('experience').value;
    var skills = document.getElementById('skills').value;
    //Generate the resume content dynamically
    var resumeHTML = "\n    <h2><b>Resume</b></h2>\n\n    <h3>Personal Information</h3>\n    <p><b>Name</b>".concat(name, "</p>\n    <p><b>Email</b>").concat(email, "}</p>\n    <p><b>Phone</b>").concat(phone, "</p>\n\n     <h3>Eduacation</h3>\n    <p><b>Eduacation</b>").concat(eduacation, "</p>\n\n     <h3>Experience</h3>\n    <p><b>Experience</b>").concat(experience, "</p>\n\n     <h3>Skills</h3>\n    <p><b>Skills</b>").concat(skills, "</p>\n    \n    ");
    //Display the generated resume 
    if (resumeDisplayElement) {
        resumeDisplayElement.innerHTML = resumeHTML;
    }
    else {
        console.log('The resume display element is missing.');
    }
});
