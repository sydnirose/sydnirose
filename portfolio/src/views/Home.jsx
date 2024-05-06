import { useState } from "react";
import { Link } from "react-router-dom";
import ItemCard from "../ItemCard/ItemCard";
import projectData from '../assets/project-data.json'

export function Home() {
    // Project content
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
                        <p>In pursuit of my professional interests in UX / UI research and design, product design and web development, I&apos;ll receive my Masters in Graphic and Web Design from <Link className="aboutLinks" to="https://www.mcad.edu/">MCAD</Link> in the Fall of 2024. My other areas of interest include reading and writing, which fueled my undergrad degree in Professional Journalism from <Link className="aboutLinks"  to="https://twin-cities.umn.edu/">UMN, Twin Cities</Link>. I&apos;m eager to combine my unique knowledge, skills, and experience to continue my career in the UX / UI space.</p>
                        <p className="website">This website was designed and bulit by me.</p>
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