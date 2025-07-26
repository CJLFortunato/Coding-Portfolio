import Projects from "./sections/Projects";
import School from "./sections/School";
import Work from "./sections/Work";

export default function Body () {
  return (
    <article>
      <p className="intro">
        Fraîchement reconvertie dans le développement web, je souhaite
        vous apporter mes compétences et mon sens du design pour vous
        aider dans la réalisation de vos projets.
      </p>
      <Work />
      <School />
      <Projects />
    </article>
  );
}