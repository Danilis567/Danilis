import { AiFillInstagram, AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import { NavLink } from "react-router-dom";
function IconContainer() {
  return (
    <div className="IconContainer animate__animated animate__fadeInUp">
      <NavLink to="https://www.instagram.com/halilanikk/" target="_blank">
        <AiFillInstagram size={48} className="IconLink" />
      </NavLink>
      <NavLink
        to="https://www.linkedin.com/in/halil-an%C4%B1k-003604235/"
        target="_blank"
      >
        <AiFillLinkedin size={48} className="IconLink" />
      </NavLink>

      <NavLink to="https://github.com/Danilis567" target="_blank">
        <AiFillGithub size={48} className="IconLink" />
      </NavLink>
    </div>
  );
}

export default IconContainer;
