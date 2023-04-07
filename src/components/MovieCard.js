import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay } from '@fortawesome/free-solid-svg-icons'
import { Link } from "react-router-dom";

const MovieCard = ({ movie }) => {
  return (
  <div className='movie'>
<div className="MovieCard" key={movie.id}>
<Link to={`/${movie.title}/${movie.id}`}>
<img src={movie.posterURL} alt={movie.title} />
  
  <div className="MovieCardDetails">
  <h3>{movie.title}</h3>
    <p className="MovieCardRating">Rating: {movie.rating}</p>
  </div>
  <div className="MovieCardDescription">
    <p>{movie.description}</p>
    <div className="MovieCardPlay">
      <FontAwesomeIcon icon={faPlay}/>
    </div>
  </div>
 </Link>
</div>
</div>

  );
};

export default MovieCard;