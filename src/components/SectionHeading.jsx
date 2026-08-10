export default function SectionHeading({ index, title, kicker }) {
  return (
    <div className="section-heading">
      <span className="section-heading__index">{index}</span>
      <h2 className="section-heading__title">{title}</h2>
      {kicker && <p className="section-heading__kicker">{kicker}</p>}
    </div>
  );
}
