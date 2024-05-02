import { useState } from "react";
import { Link } from "react-router-dom";
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
                    <Link to="/"><li>Projects</li></Link>
                    <a href="javascript: document.body.scrollIntoView(false);"><li>About</li></a>
                    <a href="javascript: document.body.scrollIntoView(false);"><li>Contact</li></a>
                </ul>
            </nav>
        </div>


        {/* Projects */}
            <div className="collection">
                {projects.map((myProject) => {
                    return (
                    <ItemCard key={myProject.slug} {...myProject} />
                    )
                })}
            </div>

        {/* Footer */}
            <footer>
                <div className="foot">
                <div className="about">
                    <h3>About</h3>
                    <p>About me blurb, paragraph or so.</p>
                </div>

                <div className="contact">
                    <h3>Contact</h3>
                    <p>This will have email and linkedin</p>
                </div>
                </div>
            </footer>
    </div>
    )
}