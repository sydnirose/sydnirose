import { useState } from 'react'
import './App.css'
import ItemCard from './ItemCard/ItemCard';

function App() {
  const [projects, setProjects] = useState([
    {
      projectTitle: "Barnes & Noble Case Study",
      projectType: "UX & UI",
      heroImage: "./barnesnoble/heroimage.png",
      id: "1"
    },

    {
      projectTitle: "BookMark Case Study",
      projectType: "UX & UI",
      heroImage: "./bookmark/heroimage.png",
      id: "2"
    },

    {
      projectTitle: "Arkitektur Case Study",
      projectType: "GRAPHIC DESIGN",
      heroImage: "./arkitektur/heroimage.png",
      id: "3"
    },
  ]);

  return (
    <>
    <div className="page">
      <h1>Sydni Rose</h1>
      <h2>Portfolio</h2>
      <div className="collection">
        {projects.map((myProject) => {
          return (
            <ItemCard key={myProject.id} {...myProject} />
          )
        })}
      </div>
    </div>
    </>
  )
}

export default App
