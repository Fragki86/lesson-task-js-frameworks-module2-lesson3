import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function GameItem({name, slug, image, released, genre}) {
  return (
    <Link to={`game/${slug}`}>
      
        <h4>{name}</h4>
        <img src={image} alt={slug} />
        <p>{released}</p>
        <p>{genre}</p>
      
    </Link>
  );
}

// GameItem.propTypes = {
//   name: PropTypes.string.isRequired,
//   slug: PropTypes.string.isRequired,
// }


export default GameItem;