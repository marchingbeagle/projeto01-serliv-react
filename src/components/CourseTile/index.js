import "./CourseTile.css";

function CourseTile(props) {
  return (
    <div className="CourseTile">
      <h2 className="CourseTile__title">{props.title}</h2>
      <p className="CourseTile-title__description">{props.description}</p>
      <button className="CourseTile-title__button">Saiba Mais</button>
    </div>
  );
}

export default CourseTile;
