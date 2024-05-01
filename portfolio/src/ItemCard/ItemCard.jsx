import PropTypes from "prop-types"
import "./ItemCard.css"

export default function ItemCard({
    projectTitle,
    projectType,
    heroImage,
    projectDescription,
    id
}) {
    return (
        <div className="projectCard">

            <div className="cardTitle">
                {projectTitle}
            </div>

            <div className="cardType">
                {projectType}
            </div>

            <div className="cardDescription">
                {projectDescription}
            </div>

            <div className="cardImg">
                <img src={heroImage} alt={"projectTitle"}/>
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