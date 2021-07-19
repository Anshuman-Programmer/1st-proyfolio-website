import "./About.css"
import Face from "./../../assets/face.png"

function About() {
  return (
    <div className="about" id="#about">
      <h1>About_me</h1>
      <div className="about__main">
        <p>Hi, Anshuman Talukdar here. I’m a Front-End Developer located in India. I have a serious passion for web development and user experiences. Currently studying B.TECH in computer science at Kaziranga University. I also work as a freelance graphic designer.<br/><br/>
          <a href="#contact">Let's make something special</a>
        </p>
        
        <img loading="lazy" src={Face} alt="Me"/>
      </div>
    </div>
  )
}

export default About
