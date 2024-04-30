import { useState } from 'react'
import { ProjectRow } from './ProjectRow'
import './App.css'

function App() {
  const myProjects = [
    {
      projectTitle: "Barnes & Noble Case Study",
      projectType: "UX & UI",
      heroImage: "./barnesnoble/heroimage.png",
      id: 1
    },

    {
      projectTitle: "BookMark Case Study",
      projectType: "UX & UI",
      heroImage: "./bookmark/heroimage.png",
      id: 2
    },

    {
      projectTitle: "Arkitektur Case Study",
      projectType: "GRAPHIC DESIGN",
      heroImage: "./arkitektur/heroimage.png",
      id: 3
    },
  ]

  return (
    <>
    <div className="page">
      <h1>Sydni Rose</h1>
      <h2>Portfolio</h2>
        <table className="project-table" >
          <thead>
            <tr>
              <th>Project Title</th>
              <th>Project Type</th>
              <th>Hero Image</th>
            </tr>
          </thead>
          <tbody>
            {myProjects.map((project) => {
              return(
                <ProjectRow
                  key={project.heroImage}
                  projectTitle={project.projectTitle}
                  projectType={project.projectType}
                  heroImage={project.heroImage}
                />
              )
            })}
          </tbody>
        </table>
      </div>
    </>
  )
}

export default App
