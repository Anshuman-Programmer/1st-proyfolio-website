import "./Hero.css"
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import InstagramIcon from '@material-ui/icons/Instagram';
import GitHubIcon from '@material-ui/icons/GitHub';

function Hero() {
  return (
    <div className="hero">
      <h1 className="hero__heading">Hi,<br/><span>Anshuman</span> Talukdar<span className="blinker">|</span><br/>Web developer</h1>
      <button className="hero__btn">Contact_me</button>
      <div className="hero__socials">
        <a href="" target="_blank">
          <LinkedInIcon style={{color: "#49e9b6", fontSize: 50, cursor: "pointer"}}/>
        </a>
        <a href="https://www.instagram.com/vexrgfx/" target="_blank">
          <InstagramIcon style={{color: "#49e9b6", fontSize: 50,cursor: "pointer", marginLeft: 50, marginRight: 50}}/>
        </a>
        <a href="https://github.com/Anshuman-Programmer" target="_blank">
          <GitHubIcon style={{color: "#49e9b6", fontSize: 50, cursor: "pointer"}}/>
        </a>

      </div>
      <div className="hero__email">
        <p className="hero__emailAddress">anshumantalukdar02@gmail.com</p>
        <div className="line"></div>
      </div>
    </div>
  )
}

export default Hero
