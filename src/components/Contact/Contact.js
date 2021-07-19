
import "./Contact.css"
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import InstagramIcon from '@material-ui/icons/Instagram';
import GitHubIcon from '@material-ui/icons/GitHub';
import PhoneIcon from '@material-ui/icons/Phone';
import EmailIcon from '@material-ui/icons/Email';
import LocationOnIcon from '@material-ui/icons/LocationOn';

function Contact() {
  return (
    <div className="contact">
      <h1 className="contact__heading">Contact_me</h1>
      <div className="contact__container">
        <form className="contact__form" action="https://formsubmit.co/anshumantalukdar02@gmail.com" method="POST">
          <input type="text" name="name" required placeholder="Your Name"/>
          <input type="email" name="email" required placeholder="Your Email Address"/>
          <input type="hidden" name="_next" value="http://localhost:3000/#contact"></input>
          <textarea className="form__message" type="text" name="message" required placeholder="Your Message"></textarea>
          <input type="hidden" name="_subject" value="New submission!"></input>
          <input type="hidden" name="_captcha" value="false"/>
          <button type="submit">Submit</button>
        </form>
        <div className="contact__socials">
          <a href="https://goo.gl/maps/SqACfCpTitGSRf197" target="_blank" rel="noreferrer" className="contact__social">
            <LocationOnIcon style={{color: "#49e9b6", fontSize: 40, marginRight: "1rem"}}/>
            <p>Jorhat, Assam, India</p>
          </a>
          <a className="contact__social">
            <PhoneIcon style={{color: "#49e9b6", fontSize: 40, marginRight: "1rem"}}/>
            <p>84864 31724</p>
          </a>
          <a href="mailto:anshumantalukdar02@gmail.com" target="_blank" rel="noreferrer" className="contact__social">
            <EmailIcon style={{color: "#49e9b6", fontSize: 40, cursor: "pointer", marginRight: "1rem"}}/>
            <p>anshumantalukdar02@gmail.com</p>
          </a>
          <a href="https://www.linkedin.com/in/anshuman-talukdar/" target="_blank" rel="noreferrer" className="contact__social">
            <LinkedInIcon style={{color: "#49e9b6", fontSize: 40, cursor: "pointer", marginRight: "1rem"}}/>
            <p>anshuman-talukdar</p>
          </a>
          <a href="https://www.instagram.com/vexrgfx/" target="_blank" rel="noreferrer" className="contact__social">
            <InstagramIcon style={{color: "#49e9b6", fontSize: 40,cursor: "pointer", marginRight: "1rem"}}/>
            <p>@vexrgfx</p>
          </a>
          <a href="https://github.com/Anshuman-Programmer" target="_blank" rel="noreferrer" className="contact__social">
            <GitHubIcon style={{color: "#49e9b6", fontSize: 40, cursor: "pointer", marginRight: "1rem"}}/>
            <p>Anshuman-Programmer</p>
          </a>

        </div>
      </div>
    </div>
  )
}

export default Contact
