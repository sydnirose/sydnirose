import PropTypes from "prop-types";
import { useParams } from "react-router-dom";

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
                    <li>Projects</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </nav>
        </div>

        <div className="productCard">
            <h1>{selectedProject.projectTitle}</h1>
            <p>{selectedProject.skillsUsed}</p>
            <p>{selectedProject.projectDescription}</p>
            <img src={selectedProject.heroImage} alt={selectedProject.projectTitle} />
        </div>
        <div className="processCard">
            <h1>{selectedProject.processTitle}</h1>
            <p>{selectedProject.processDescription}</p>
            <img src={selectedProject.img1} alt={selectedProject.projectTitle} />
            <img src={selectedProject.img2} alt={selectedProject.projectTitle} />
            <img src={selectedProject.img3} alt={selectedProject.projectTitle} />
            <img src={selectedProject.img4} alt={selectedProject.projectTitle} />
        </div>


        {/* Footer */}
        <footer>
            <div className="foot">
                <p>This is the footer, will have email and linkedin</p>
             </div>
        </footer>
        </>
    )
}

ProjectPage.propTypes = {
    data: PropTypes.array
}