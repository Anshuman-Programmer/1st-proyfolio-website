import Project from "../Project/Project"
import "./Projects.css"
import NexflixImage from "../../assets/nexflix.jpg"
import VexbookImage from "../../assets/vexbook.jpg"
import VisneyImage from "../../assets/visney.jpg"
import VexDocsImage from "../../assets/vexdocs.jpg"

function Projects() {
  return (
    <div className="projects">
      <h2 className="projects__heading">Projects</h2>
      <div className="projects__single">
        <Project title="1.Vex Docs" imgUrl={VexDocsImage} tech="CRUD, Rich editor, Next.js, Tailwind CSS, FireStore, Next auth, etc" code="https://github.com/Anshuman-Programmer/vex-docs" demo="https://vex-docs.vercel.app"/>
        <Project title="2.Visney Plus" imgUrl={VisneyImage} tech="React.js, Styled Components, Google auth, Git, FireStore (Firebase) database, etc" code="https://github.com/Anshuman-Programmer/visney-disney-plus-clone" demo="https://visneyplus.web.app/"/>
        <Project title="3.Vexflix" imgUrl={NexflixImage} tech="Axios, SASS, Redux, React-router-dom, TMDB (The movie database api) ,etc" code="https://github.com/Anshuman-Programmer/Vexfilx-Netflix-clone" demo="https://vexflix.web.app/"/>
        <Project title="4.Vexbook" imgUrl={VexbookImage} tech="Tailwind CSS, FireStore, Read and Write from NoSQL Database, etc" code="https://github.com/Anshuman-Programmer/VexBook-facebook-clone" demo="https://vex-book-facebook-clone.vercel.app/"/>

      </div>
    </div>
  )
}

export default Projects
