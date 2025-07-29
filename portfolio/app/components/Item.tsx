export default function Item (props: any) {
  const { item } = props;
  return (
    <section>
      <h3>{item.job}</h3>
      <time dateTime="">{item.period}</time>
      <p><strong>{item.company}</strong></p>
      <p>{item.summary}</p>
      <ul>
        {item.tasks.map((task:string) => <li>{task}</li>)}
      </ul>
    </section>
  );
}