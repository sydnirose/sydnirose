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

        {/* Final Product */}
        <div className="productCard">
            <div className="content">
                <h1 className="title">{selectedProject.projectTitle}</h1>
                <p className="skills">{selectedProject.skillsUsed}</p>
                <p className="description">{selectedProject.projectDescription}</p>
            </div>

            <div className="heroImg">
                <img src={selectedProject.heroImage} alt={selectedProject.projectTitle} />
            </div>
        </div>

            <div className="secondaryImg">
                <img src={selectedProject.secondaryImage} alt={selectedProject.projectTitle} />
            </div>

        {/* Design Process */}
        <div className="processCard">
            <div className="processContent">
                <h1 className="title">{selectedProject.processTitle}</h1>
                <p className="description">{selectedProject.processDescription}</p>
            </div>

            <div className="img1">
                <img src={selectedProject.img1} alt={selectedProject.projectTitle} />
            </div>

            <div className="imgSet">
                <div className="column">
                    <img src={selectedProject.img2} alt={selectedProject.projectTitle} />
                </div>

                <div className="column">
                    <img src={selectedProject.img3} alt={selectedProject.projectTitle} />
                </div>
            </div>

        </div>

        </div>


        {/* Footer */}
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
                    <p>salexandra.rose@gmail.com</p>
                    <p>linkedin.com/sydnirose</p>
                </div>
                </div>
            </footer>
        </>
    )
}

ProjectPage.propTypes = {
    data: PropTypes.array
}