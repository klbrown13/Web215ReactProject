import htmlicon from './images/html-5.png'
import cssicon from './images/css-3.png'
import jsicon from './images/js.png'
import csharpicon from './images/c-sharp.png'
import wordpressicon from './images/wordpress-logo.png'

function Skills() { 
    return ( 
      <div className="skills"> 
        <h3>Skills</h3> 
        <ul className="webskills"> 
          <li><img class="project-image" src={htmlicon} alt="HTML logo"/></li> 
          <li><img class="project-image" src={cssicon} alt="CSS logo"/></li> 
          <li><img class="project-image" src={jsicon} alt="JavaScript logo"/></li> 
          <li><img class="project-image" src={csharpicon} alt="C# logo"/></li>
          <li><img class="project-image" src={wordpressicon} alt="WordPress logo"/></li>
        </ul> 
      </div> 
    ); 
  } 
  
  export default Skills;
  