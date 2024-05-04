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
                <Link to="/"><h1>Sydni Rose</h1></Link>
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
                    <h3>ABOUT</h3>
                    <p>About me blurb, paragraph or so.</p>
                    <p>This website was designed and bulit by me.</p>
                </div>

                <div className="contact">
                    <h3>CONTACT</h3>
                    <Link to='javascript:void(0)'
                        onClick={() => window.location = 'mailto:salexandra.rose@gmail.com'}>
                        <p>salexandra.rose@gmail.com</p>
                    </Link>
                    <Link to="https://www.linkedin.com/in/sydni-rose-360b54194"><p>linkedin.com/sydnirose</p></Link>
                </div>
                </div>
            </footer>
    </div>
    )
}