import PropTypes from "prop-types";
import { useParams, Link } from "react-router-dom";
import './ProjectPage.css';

export function ProjectPage({data}) {
    const { slug } = useParams();
    console.log("params", slug);
    const selectedProject = data.find((project) => project.slug === slug);
    console.log("project", selectedProject);
    return(
        <>
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

        {/* Final Product */}
        <div className="productCard">
            <h1 className="title">{selectedProject.projectTitle}</h1>
            <p className="skills">{selectedProject.skillsUsed}</p>
            <p className="description">{selectedProject.projectDescription}</p>
            <img className="heroImg" src={selectedProject.heroImage} alt={selectedProject.projectTitle} />
            <img className="secondaryImg" src={selectedProject.secondaryImage} alt={selectedProject.projectTitle} />
        </div>

        {/* Design Process */}
        <div className="processCard">
            <h1 className="title">{selectedProject.processTitle}</h1>
            <p className="description">{selectedProject.processDescription}</p>
            <img className="img1" src={selectedProject.img1} alt={selectedProject.projectTitle} />
            <img className="img2" src={selectedProject.img2} alt={selectedProject.projectTitle} />
            <img className="img3" src={selectedProject.img3} alt={selectedProject.projectTitle} />
            <img className="img4" src={selectedProject.img4} alt={selectedProject.projectTitle} />
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
        </>
    )
}

ProjectPage.propTypes = {
    data: PropTypes.array
}