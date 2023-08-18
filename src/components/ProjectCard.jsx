import { NavLink } from "react-router-dom";
import BtnOutline from "./BtnOutline";
import PropTypes from "prop-types";

// eslint-disable-next-line react/prop-types
function ProjectCard({ title, explanation, img, alt, projectsLink }) {
  return (
    <>
      <div className="card animate__animated animate__fadeInLeftBig">
        <div className="cardTextContainer">
          <h3>{title}</h3>
          <p> {explanation} </p>
          <NavLink to={projectsLink} target="_blank">
            <BtnOutline data="View Project" />
          </NavLink>
        </div>
        <div className="CardImg">
          <img src={img} alt={alt} />
        </div>
      </div>
    </>
  );
}

ProjectCard.prototype = {
  title: PropTypes.string.isRequired,
  explanation: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  alt: PropTypes.string,
  projectsLink: PropTypes.string.isRequired,
};

export default ProjectCard;
