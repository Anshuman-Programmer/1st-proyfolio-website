
import "./Header.css"
import Resume from "../../assets/RESUME.pdf"

function Header() {
  return (
    <header className="header">
      <h3 className="header__logo">Anshuman T.</h3>
      <ul className="header__links">
        <li className="header__link"><a href="#hero"><span>1.</span>Hero</a></li>
        <li className="header__link"><a href="#about"><span>2.</span>About_me</a></li>
        <li className="header__link"><a href="#projects"><span>3.</span>Projects</a></li>
        <li className="header__link"><a href="#contact"><span>4.</span>Contact_me</a></li>
        <a className="header_resume_link" download="Anshuman-Talukdar-Resume" href={Resume}>Resume</a>
      </ul>
    </header>
  )
}

export default Header
