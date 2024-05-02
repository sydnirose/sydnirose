import PropTypes from "prop-types"
import "./ItemCard.css"
import { Link } from 'react-router-dom';

export default function ItemCard({
    projectTitle,
    projectType,
    heroImage,
    id,
}) {
    return (
        <div className="projectCard">

            <div className="cardImg">
            <Link to={`${id}`}><img src={heroImage} alt={"projectTitle"}/></Link>
            </div>

            <div className="cardType">
                {projectType}
            </div>

            <div className="cardTitle">
                <Link to={`${id}`}>{projectTitle}</Link>
                
            </div>
            
        </div>
    )
}

ItemCard.propTypes = {
    projectTitle: PropTypes.string,
    projectType: PropTypes.string,
    heroImage: PropTypes.string,
    id: PropTypes.string
}