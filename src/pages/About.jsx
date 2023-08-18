import BtnYellow from "../components/BtnYellow";
import Contacts from "../components/Contacts";

function About() {
  return (
    <>
      <div className="Container">
        <div className="About animate__fadeInLeft animate__animated">
          <div className="AboutTextContainer">
            <h2 className="title">About me</h2>
            <p>
              Nisl arcu, scelerisque neque ut. Tincidunt amet, tempor duis
              tortor neque auctor dis ipsum. Pretium cras amet odio amet
              eleifend id sed cras sed. Aliquet risus posuere aliquet imperdiet
              sit.
            </p>
            <BtnYellow data="Download cv" />
          </div>
          <div className="animate__fadeInRightBig animate__animated">
            <img src="src/assets/HeroProfil.png" alt="" />
          </div>
        </div>

        <Contacts />
      </div>
    </>
  );
}

export default About;
