"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Get refrences to the form and display area
var form = document.getElementById('resume-form');
var resumeDisplayElement = document.getElementById('resume display');
// Handle form sumbission
form.addEventListener('submit', function (event) {
    event.preventDefault(); // prevent page relode
    // collect input values
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var education = document.getElementById('education').value;
    var skills = document.getElementById('skills').value;
    // Generate the resume content dynamically
    var resumeHTML = "\n    <h2><b>Resume</b></h2>\n    <h3>Personal Information</h3>\n    <p><b>Name:</b>$(name)</p>\n     <p><b>Email:</b>$(email)</p>\n      <p><b>Phone:</b>$(phone)</p>\n\n      <h3>Education</h3>\n      <p>$(education)</p>\n\n      \n      <h3>Exprience</h3>\n      <p>$(exprience)</p>\n\n      \n      <h3>Skills</h3>\n      <p>$(skills)</p>\n    ";
    //Display the genrated resume
    if (resumeDisplayElement) {
        resumeDisplayElement.innerHTML = resumeHTML;
    }
    else {
        console.error('The resume display element is missing.');
    }
});
