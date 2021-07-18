import "./Hero.css"
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import InstagramIcon from '@material-ui/icons/Instagram';
import GitHubIcon from '@material-ui/icons/GitHub';


function Hero() {
  return (
    <div className="hero">
      <h1 className="hero__heading">Hi,<br/><span>Anshuman</span> Talukdar<span className="blinker">|</span><br/> Web developer</h1>
      <a className="hero__btn" href="#contact">Contact_me</a>
      <div className="hero__socials">
        <a href="https://www.linkedin.com/in/anshuman-talukdar/" target="_blank" rel="noreferrer">
          <LinkedInIcon style={{color: "#49e9b6", fontSize: 50, cursor: "pointer"}}/>
        </a>
        <a href="https://www.instagram.com/vexrgfx/" target="_blank" rel="noreferrer">
          <InstagramIcon style={{color: "#49e9b6", fontSize: 50,cursor: "pointer", marginLeft: 50, marginRight: 50}}/>
        </a>
        <a href="https://github.com/Anshuman-Programmer" target="_blank" rel="noreferrer">
          <GitHubIcon style={{color: "#49e9b6", fontSize: 50, cursor: "pointer"}}/>
        </a>

      </div>
      <div className="hero__email">
        <p className="hero__emailAddress"><a href="mailto:anshumantalukdar02@gmail.com">anshumantalukdar02@gmail.com</a></p>
        <div className="line"></div>
      </div>
    </div>
  )
}

export default Hero
