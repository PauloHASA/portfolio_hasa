import {Link} from "react-router-dom";

function Card({title, description, link}) {
  return (
    <div className="card">
      <h3>{title}</h3>
      <p>{description}</p>
      <Link to={link}>Veja mais</Link>
    </div>
  );
}

export default Card;