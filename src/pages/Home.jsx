import BtnYellow from "../components/BtnYellow";
import BtnOutline from "../components/BtnOutline";
import { NavLink } from "react-router-dom";
import IconContainer from "../components/IconContainer";

function Home() {
  return (
    <>
      <div className="Container Hero animate__animated animate__fadeInLeft">
        <div className="HeroTextContainer">
          <div className="tag">web developer</div>
          <h1 className="title">Hello, my name is Danilis</h1>
          <p>
            Short text with details about you, what you do or your professional
            career. You can add more information on the about page.
          </p>
          <div className="BtnContainer">
            <NavLink to="/projects">
              <BtnYellow data="Projects" />
            </NavLink>
            <NavLink
              to="https://www.linkedin.com/in/halil-an%C4%B1k-003604235/"
              target="_blank"
            >
              <BtnOutline data="LinkedIn" />
            </NavLink>
          </div>
        </div>
        <div className="animate__fadeInRightBig animate__animated">
          <img src="../assets/HeroProfil.png" alt="" />
        </div>
      </div>
      <div className="IconContainerHero">
        <IconContainer />
      </div>
    </>
  );
}

export default Home;
