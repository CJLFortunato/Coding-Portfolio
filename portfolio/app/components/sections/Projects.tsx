export default function Projects () {
  return (
    <section className="body-section">
      <h2>Projets</h2>
      <hr />
      <section>
        <h3>benhur</h3>
        <figure>
          <img src="benhur_1.jpg" alt="benhur" />
          <figcaption>
            Outil interne destiné à améliorer la performance des équipes en facilitant la récupération des données SEO des clients et en les restituant sous forme de graphiques et tableaux.
            <br />
            <div className="tech-ctn">
            {
              ['React', 'Redux', 'Material UI', 'Recharts', 'FastAPI', 'SQlAlchemy', 'postGreSQL', 'Apache airflow', 'Docker'].map(el => <h6>{el}</h6>)
            }
            </div>
          </figcaption>
        </figure>
      </section>
    </section>
  );
}