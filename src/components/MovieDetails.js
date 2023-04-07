import { useParams, Link } from "react-router-dom";
import { faPlay } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const new_movie = JSON.parse(localStorage.getItem("movie"));


function MovieDetails() {
  const { id } = useParams();
  const movieId = new_movie.find((m) => m.id === Number(id));

  return (
<div class="movie-details">
<div class="movie-container">
  <div class="movie-images">
    <div class="movie-poster-wrapper">
      <img class="movie-poster" src={movieId.posterURL} alt={movieId.title} />
      <div class="play-icon">
        <i class="fas fa-play"></i>
      </div>
    </div>
    <div class="movie-info">
      <h1 class="movie-title">{movieId.title}</h1>
      <p class="movie-description">{movieId.description}</p>
      <a href="#video" class="trailer-link" data-trailer-id={movieId.trailerId}>Watch Trailer</a>
    </div>
  </div>
  </div>
  <div class="back-button">
    <a href="/">Back to Home</a>
  </div>
  
  <div class="trailer-overlay" id={movieId.trailerId}>
    <a href="#" class="close-button">&times;</a>
    <iframe id="video" width="560" height="315" src={movieId.trailer} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
  </div>
</div>



  );
}

export default MovieDetails;