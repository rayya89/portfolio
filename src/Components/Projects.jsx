import Card from './Card'
import '../Styles/Projects.css'
import projects from "../Data/projects.json";

export default function Projects() {

const Cards = projects.map((projectInfo)=> <Card key={projectInfo.id} projectInfo={projectInfo}/>);

  return (
    <div className="projects" id="Projects">
            <h2>Projects</h2>
        <div className='layout-3'>
            <div className="paragraph">
                <p>Here are the projects I have done so far and the projects I will be making during the upcoming days.</p>
            </div>
            <div className="content">
                <div className="card-grid">
                    {Cards}
                </div>
            </div>
        </div>
    </div>
  )


}
