import github_icon from './images/github-logo.png'
import linkedin_icon from './images/linkedin-logo.png'

function Footer() { 
    return ( 
      <footer className="footer"> 
          <h3>Contact Information</h3>
          <p>Email: <a href="mailto:klbrown13@my.waketech.edu"> klbrown13@my.waketech.edu</a></p>
          <a href="https://github.com/klbrown13"><img src={github_icon} alt="" width="50" height="40" className="footer_icon"/></a>
          <a href="https://www.linkedin.com/in/kurt-brown-coding/"><img src={linkedin_icon} alt="" width="50" height="40" className="footer_icon"/></a>
      </footer> 
    ); 
  } 
  
  export default Footer;
  
  