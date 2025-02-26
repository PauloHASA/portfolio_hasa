import { Link } from "react-router-dom";
import Card from "../cards/Cards";

function ProjectSection() {
  return(
    <section>
      <h2>Meus Projetos</h2>
      <div className="projects-list">
        <Card
          title="Pojeto 1"
          description= "Resumo do projeto"
          link="/projects/project1"
        />
      </div>
      <Link to="/projects">Veja todos os projetos</Link>
    </section>
  );
}

export default ProjectSection;