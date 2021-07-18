
import KeyboardArrowUpRoundedIcon from '@material-ui/icons/KeyboardArrowUpRounded';
import "./Footer.css"

function Footer() {
  return (
    <div className="footer">
      <div className="footer__icon"><a href="#hero"><KeyboardArrowUpRoundedIcon style={{color: "#49e9b6", fontSize: 50, cursor: "pointer"}}/></a></div>
      <p>Designed and Coded by Anshuman Talukdar</p>
      <p>© 2021 Anshuman Talukdar</p>
    </div>
  )
}

export default Footer
