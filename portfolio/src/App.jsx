import { useState } from 'react'
import './App.css'
import ItemCard from './ItemCard/ItemCard';

function App() {
  const [projects] = useState([
    {
      projectTitle: "Barnes & Noble Case Study",
      projectType: "UX & UI",
      heroImage: "./barnesnoble/heroimage.png",
      projectDescription: "description of project here",
      skillsUsed: ["User Journey Mapping", "Research", "Wireframing", "Prototyping", "Design Systems", "Figma"],
      processTitle: "Design Process",
      processDescription: "description of process here",
      id: "1"
    },

    {
      projectTitle: "BookMark Case Study",
      projectType: "UX & UI",
      heroImage: "./bookmark/heroimage.png",
      projectDescription: "description of project here",
      skillsUsed: ["User Research", "Market Research", "Wireframing", "Prototyping", "Design Systems", "Figma"],
      processTitle: "Design Process",
      processDescription: "description of process here",
      id: "2"
    },

    {
      projectTitle: "Arkitektur Case Study",
      projectType: "GRAPHIC DESIGN",
      heroImage: "./arkitektur/heroimage.png",
      projectDescription: "description of project here",
      skillsUsed: ["User Persona Research", "Design Systems", "Adobe Createive Suite"],
      processTitle: "Design Process",
      processDescription: "description of process here",
      id: "3"
    },
  ]);

  console.log(projects);

  return (
    <>
    <div className="page">
      {/* Header */}
      <div className="head">
        <header>
          <h1>Sydni Rose</h1>
        </header>

        {/* Navigation */}
        <nav>
          <ul>
            <li>Projects</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </nav>
      </div>

      {/* Projects */}
      <div className="collection">
        {projects.map((myProject) => {
          return (
            <ItemCard key={myProject.id} {...myProject} />
          )
        })}
      </div>

      {/* Footer */}
      <footer>
        <div className="foot">
          <p>This is the footer, will have email and linkedin</p>
        </div>
      </footer>
    </div>
    </>
  )
}

export default App