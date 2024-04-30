import PropTypes from "prop-types"
import "./ItemCard.css"

export default function ItemCard({
    projectTitle,
    projectType,
    heroImage,
    id
}) {
    return (
        <div className="projectCard">
            Item Card
        </div>
    )
}

ItemCard.propTypes = {
    projectTitle: PropTypes.string,
    projectType: PropTypes.string,
    heroImage: PropTypes.string,
    id: PropTypes.string
}