
import "./Header.css"

function Header() {
  return (
    <header className="header">
      <h3 className="header__logo">Anshuman T.</h3>
      <ul className="header__links">
        <li className="header__link" href="#hero"><span>1.</span>Hero</li>
        <li className="header__link" href="#about"><span>2.</span>About_me</li>
        <li className="header__link" href="#projects"><span>3.</span>Projects</li>
        <li className="header__link" href="#contact"><span>4.</span>Contact_me</li>
        <li className="header_resume_link"><a>Resume</a></li>
      </ul>
    </header>
  )
}

export default Header
