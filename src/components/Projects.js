import "./Project.css"
import { projectInfo } from "../ProjectData"

function Projects() {
    const projectItem = projectInfo.map(item => (
        <div className="project-item">
            <div className="project-image-div">
                <img src={item.photo} alt="project" className="project-image" />
            </div>
            <h>{item.title}</h>
            <p>{item.description}</p>
            <ul>
                {
                    item.tech.map(tech => <li>{tech}</li>)
                }
            </ul>
        </div>
    ))
    return (
        <section className="projects">
            <h1>My Projects</h1>
            <div className="project-container">
                {projectItem}
            </div>
        </section>
    )
}

export default Projects