export default function Project (props: any) {
  const { project } = props;
  return (
    <section>
      <h3>{project.title}</h3>
      <figure>
        <img src={project.img} alt={project.title} />
        <figcaption>
          {project.summary}
          <br />
          <div className="tech-ctn">
          {
            project.tech.map((el: string) => <h6>{el}</h6>)
          }
          </div>
        </figcaption>
      </figure>
    </section>
  );
}