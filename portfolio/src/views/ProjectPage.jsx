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
        </div>

        <div className="imgSet">
                <div className="img2">
                    <img src={selectedProject.img2} alt={selectedProject.projectTitle} />
                </div>

                <div className="img3">
                    <img src={selectedProject.img3} alt={selectedProject.projectTitle} />
                </div>
        </div>

    </div>

         {/* Footer */}
         <footer>
                <div className="foot">
                    <div className="about">
                        <h3>ABOUT</h3>
                        <p>In pursuit of my professional interests in UX / UI research and design, product design and web development, I&apos;ll receive my Masters in Graphic and Web Design from <Link className="aboutLinks" to="https://www.mcad.edu/">MCAD</Link> in the Fall of 2024. My other areas of interest include reading and writing, which fueled my undergrad degree in Professional Journalism from <Link className="aboutLinks"  to="https://twin-cities.umn.edu/">UMN, Twin Cities</Link>. I&apos;m eager to combine my unique knowledge, skills, and experience to continue my career in the UX / UI space!</p>
                        <p className="website">This website was designed and bulit by me.</p>
                    </div>

                    <div className="contact">
                        <h3>CONTACT</h3>
                        <Link to='javascript:void(0)'
                        onClick={() => window.location = 'mailto:salexandra.rose@gmail.com'}>
                        <p>salexandra.rose@gmail.com</p>
                        </Link>
                        <Link to="https://www.linkedin.com/in/sydni-rose-360b54194"><p>linkedin.com/sydnirose</p></Link>
                    </div>
                </div>
            </footer>
        </>
    )
}

ProjectPage.propTypes = {
    data: PropTypes.array
}