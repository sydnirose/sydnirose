import PropTypes from "prop-types";
import "./ItemCard.css";
import { Link } from 'react-router-dom';

export default function ItemCard({
    projectTitle,
    projectType,
    heroImage,
    slug,
}) {
    return (
        <div className="projectCard">
            <Link to={`${slug}`}>
            <div className="cardImg">
            <Link to={`${slug}`}><img src={heroImage} alt={projectTitle}/></Link>
            </div>

            <div className="cardType">
                {projectType}
            </div>

            <div className="cardTitle">
                <Link to={`${slug}`}>{projectTitle}</Link>
            </div>
            </Link>
        </div>
    )
}

ItemCard.propTypes = {
    projectTitle: PropTypes.string,
    projectType: PropTypes.string,
    heroImage: PropTypes.string,
    slug: PropTypes.string
}