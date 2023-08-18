import ProjectsCard from "../components/ProjectCard";
import Title from "../components/Title";
import IconContainer from "../components/IconContainer";
import { data } from "../data";
function Projects() {
  return (
    <>
      <div className="Container Projects animate__animated animate__fadeInUp">
        <Title title="Projects" />
        {data.map((item) => (
          <ProjectsCard
            key={item.id}
            title={item.title}
            explanation={item.explanation}
            img={item.img}
            alt={item.alt}
            projectsLink={item.projectsLink}
          />
        ))}
        <div className="ProjectsIconContainer">
          <IconContainer />
        </div>
      </div>
    </>
  );
}

export default Projects;
