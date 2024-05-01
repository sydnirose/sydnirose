import PropTypes from "prop-types"
import "./ItemCard.css"

export default function ItemCard({
    projectTitle,
    projectType,
    heroImage,
    // id
}) {
    return (
        <div className="projectCard">

            <div className="cardImg">
                <img src={heroImage} alt={"projectTitle"}/>
            </div>

            <div className="cardType">
                {projectType}
            </div>

            <div className="cardTitle">
                {projectTitle}
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