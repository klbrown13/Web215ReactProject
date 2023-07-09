import web110pic from './images/web110project.jpg'
import web115pic from './images/web115project.jpg'
import web140pic from './images/web140project.jpg'
import web140wpress from './images/web140wordpress.jpg'

function Projects() { 
    return ( 
      <div className="projects">
          <div class="grid-item">
              <h3 class="project-name">Landing Page Project</h3>
              <div class="image-container">
              <img class="project-image" src={web110pic} alt="Screenshot of my Web 110 Project" width="300" height="300"/>
              </div>
              <p class="project-description">This is the final project for the Web 110 class. The assignment was to create a landing page for your place of employment. This landing page contained details about a program your company was presenting. The second page contains a form where anyone interested would fill out the form. The final page gives a location of where the event will take place. This project was completed using only HTML and CSS. This project was completed in the Fall 2022 semester. Check out the project <a href="https://wcet.waketech.edu/klbrown13/WEB110/Final%20Project/signupform.html">here.</a></p>
              </div>
          <div class="grid-item">
              <h3 class="project-name">Resume Builder Project</h3>
              <div class="image-container">
              <img class="project-image" src={web115pic} alt="Screenshot of my Web 115 Project" width="300" height="300"/>
              </div>
              <p class="project-description">This is the final project for the Web 115 class. A user enters their information into the webpage, once they click "Create Resume", a formatted resume is created in a pop-up window. I completed this project using HTML, CSS, and JavaScript. Check out the project <a href="https://wcet.waketech.edu/klbrown13/WEB115/FinalProject/finalProject.html">here.</a></p></div>
          <div class="grid-item">
              <h3 class="project-name">Vicious Cycles Project</h3>
              <div class="image-container">
              <img class="project-image" src={web140pic} alt="Screenshot of my Web 140 Project" width="300" height="300"/>
              </div>
              <p class="project-description">This is the final project for the Web 140 class. A website created for the Vicious Cycles company. I completed this project using only HTML and CSS. This project was completed during the Spring 2023 semester. Check out the project <a href="https://wcet.waketech.edu/klbrown13/WEB140/FinalProject/index.html">here.</a></p></div>  
          <div class="grid-item">
              <h3 class="project-name">WordPress Project</h3>
              <div class="image-container">
              <img class="project-image" src={web140wpress} alt="Screenshot of my Web 140 WordPress Project" width="300" height="300"/>
              </div>
              <p class="project-description">This is a WordPress project. I created a professional portfolio website. This project was completed using WordPress. Check out the project <a href="https://wcet.waketech.edu/klbrown13/WEB140/wordpress/">here.</a></p>
          </div>
        </div>
    ); 
  } 
  export default Projects;
  