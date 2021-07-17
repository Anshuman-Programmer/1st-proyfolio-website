import Project from "../Project/Project"
import "./Projects.css"
import NexflixImage from "../../assets/nexflix.jpg"
import VexbookImage from "../../assets/vexbook.jpg"
import VisneyImage from "../../assets/visney.jpg"

function Projects() {
  return (
    <div className="projects">
      <h2 className="projects__heading">Projects</h2>
      <div className="projects__single">
        <Project title="1.Vex Docs" imgUrl={NexflixImage} tech="" code="" demo=""/>
        <Project title="2.Visney Plus" imgUrl={VisneyImage} tech="" code="https://github.com/Anshuman-Programmer/visney-disney-plus-clone" demo="https://visneyplus.web.app/"/>
        <Project title="3.Vexflix" imgUrl={NexflixImage} tech="" code="https://github.com/Anshuman-Programmer/Vexfilx-Netflix-clone" demo="https://vexflix.web.app/"/>
        <Project title="4.Vexbook" imgUrl={VexbookImage} tech="" code="https://github.com/Anshuman-Programmer/VexBook-facebook-clone" demo="https://vex-book-facebook-clone.vercel.app/"/>

      </div>
    </div>
  )
}

export default Projects
