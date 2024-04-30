/* eslint-disable react/prop-types */
export function ProjectRow({projectTitle, projectType, heroImage}) {
    return(
        <tr>
            <td className="project-title" style={{fontWeight: 900}} >{projectTitle}</td>
            <td className="project-type">{projectType}</td>
            <td><img src={heroImage} alt={projectTitle} /></td>
        </tr>
    )
}