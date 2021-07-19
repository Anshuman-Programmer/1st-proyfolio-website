
import "./Project.css"

function Project({title,imgUrl,tech, code, demo}) {
  return (
    <div className="project">
      <h1>{title}</h1>
      <div className="project-image">
        <img src={imgUrl} alt="project"/>
      </div>
      <p>{tech}</p>
      <div className="project__btns">
        <a className="project__btn" href={code} target="_black">code</a>
        <a className="project__btn" href={demo} target="_black">demo</a>
      </div>
    </div>
  )
}

export default Project
