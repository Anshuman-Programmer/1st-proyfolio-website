
import "./Header.css"
import Resume from "../../assets/RESUME.pdf"
import { useState } from "react"
import MenuRoundedIcon from '@material-ui/icons/MenuRounded';

function Header() {

  const [menu, setMenu] = useState(false)

  return (
    <header className="header">
      <h3 className="header__logo"><a href="#hero">Anshuman T.</a></h3>
      <ul className="header__links">
        <li className="header__link"><a href="#hero"><span>1.</span>Home</a></li>
        <li className="header__link"><a href="#about"><span>2.</span>About_me</a></li>
        <li className="header__link"><a href="#projects"><span>3.</span>Projects</a></li>
        <li className="header__link"><a href="#contact"><span>4.</span>Contact_me</a></li>
        <a className="header_resume_link" download="Anshuman-Talukdar-Resume" href={Resume}>Resume</a>
        <a className="menuBtn" onClick={()=>setMenu(!menu)}><MenuRoundedIcon style={{color: "#49e9b6", fontSize: 30, cursor: "pointer"}}/></a>
      </ul>
      
      <ul className={`header__linksMobile ${menu ? "open" : ""}`}>
        <li className="header__linkMobile"><a onClick={()=>setMenu(!menu)} href="#hero"><span>1.</span>Home</a></li>
        <li className="header__linkMobile"><a onClick={()=>setMenu(!menu)} href="#about"><span>2.</span>About_me</a></li>
        <li className="header__linkMobile"><a onClick={()=>setMenu(!menu)} href="#projects"><span>3.</span>Projects</a></li>
        <li className="header__linkMobile"><a onClick={()=>setMenu(!menu)} href="#contact"><span>4.</span>Contact_me</a></li>      </ul>
    </header>
  )
}

export default Header
