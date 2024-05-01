import { useState } from 'react'
import './App.css'
import ItemCard from './ItemCard/ItemCard';

function App() {
  const [projects] = useState([
    {
      projectTitle: "Barnes & Noble Case Study",
      projectType: "UX & UI",
      heroImage: "./barnesnoble/heroimage.png",
      projectDescription: "descriptions here",
    },

    {
      projectTitle: "BookMark Case Study",
      projectType: "UX & UI",
      heroImage: "./bookmark/heroimage.png",
      projectDescription: "descriptions here",
    },

    {
      projectTitle: "Arkitektur Case Study",
      projectType: "GRAPHIC DESIGN",
      heroImage: "./arkitektur/heroimage.png",
      projectDescription: "descriptions here",
    },
  ]);

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

      </footer>
    </div>
    </>
  )
}

export default App