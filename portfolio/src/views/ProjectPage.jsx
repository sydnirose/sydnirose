import PropTypes from "prop-types";
import { useParams } from "react-router-dom";

export function ProjectPage({data}) {
    const { slug } = useParams();
    console.log("params", slug);
    const selectedProject = data.find((project) => project.slug === slug);
    console.log("project", selectedProject);
    return(
        <>
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
        </div>
        </>
    )
}

ProjectPage.propTypes = {
    data: PropTypes.array
}