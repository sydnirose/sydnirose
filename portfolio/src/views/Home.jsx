import { useState } from "react";
import ItemCard from "../ItemCard/ItemCard";
import projectData from '../assets/project-data.json'

export function Home() {
    const [projects] = useState(projectData);

    return (
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
    )
}