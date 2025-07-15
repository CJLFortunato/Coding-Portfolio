import Link from "next/link";

function ProjectsPage () {
  return (
    <div className="projects">
      <h1>Projects</h1>
        <article className="projects-container">
          <Link href="/projects/benhur">
          <section className="project-card">
            <h2>benhur</h2>
            <p>Outil interne de search listening SEO développé pour l'Agence WAM</p>
          </section>
          </Link>
        </article>
    </div>
  );
}

export default ProjectsPage;