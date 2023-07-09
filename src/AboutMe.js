import profilepic from './images/profilepicture.jpg'

function AboutMe() { 
    return ( 
      <div className="aboutme"> 
        <h3>About Me</h3> 
        <img src={profilepic} alt="Kurt Brown pictured in a blue plaid shirt." width="250"/> 
        <p>Hello! I am Kurt Brown. I am currently living in Charlotte, North Carolina working as a Librarian. 
          I am in the Web Development program at Wake Tech, looking to transition to a Web Developer career. </p> 
        <p>I love trying different types of food, but I really love Chinese food. During the day, I teach free Microsoft Word classes and I help library patrons with their resumes and obtain jobs. </p>
      </div> 
    ); 
  } 
  
  export default AboutMe;
  
  