// Get references to the form and display area
const form = document.getElementById('resume-form') as HTMLFormElement;
const resumeDisplayElement = document.getElementById('resume-display') as HTMLDivElement

//Handle form submission
form.addEventListener('submit', (event: Event)=>{
    event.preventDefault(); // prevent page reload

    //colect input values
    const name = (document.getElementById('name') as HTMLInputElement).value
    const email = (document.getElementById('email') as HTMLInputElement).value
    const phone = (document.getElementById('phone') as HTMLInputElement).value
    const eduacation = (document.getElementById('eduacation') as HTMLInputElement).value
    const experience = (document.getElementById('experience') as HTMLInputElement).value
    const skills= (document.getElementById('skills') as HTMLInputElement).value

    //Generate the resume content dynamically
    const resumeHTML = `
    <h2><b>Resume</b></h2>

    <h3>Personal Information</h3>
    <p><b>Name</b>${name}</p>
    <p><b>Email</b>${email}}</p>
    <p><b>Phone</b>${phone}</p>

     <h3>Eduacation</h3>
    <p><b>Eduacation</b>${eduacation}</p>

     <h3>Experience</h3>
    <p><b>Experience</b>${experience}</p>

     <h3>Skills</h3>
    <p><b>Skills</b>${skills}</p>
    
    `;
    //Display the generated resume 
    if(resumeDisplayElement){
        resumeDisplayElement.innerHTML = resumeHTML;
    }else{
        console.log('The resume display element is missing.');
    }
    

});                                 