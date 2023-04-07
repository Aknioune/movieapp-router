import React, { useState } from 'react';// Import de React et de useState
import MovieList from './components/MovieList'; // Import du composant MovieList
import Filter from './components/Filter';// Import du composant Filter
import Header from './components/Header';

import './App.css';// Import du fichier CSS pour styliser l'application
import {Route, Routes} from 'react-router-dom';
import MovieDetails from './components/MovieDetails';



function App() {
  // Définition d'un état "movies" qui contient une liste de films, initialisée avec 3 films
  const [movies, setMovies] = useState([
    {
      id: 1,
      title: 'Harry potter',
      description: 'assez frêle et chétif, à cause de sa malnutrition chez les Dursley.',
      posterURL: 'https://media.harrypotterfanzone.com/philosophers-stone-20-years-of-movie-magic-harry-poster.jpg',
      trailer:'https://www.youtube.com/embed/VyHV0BRtdxo',
      rating: 9.3,
    },
    {
      id: 2,
      title: 'The lord of the rings ',
      description: 'the saga of a group of sometimes reluctant heroes who set forth to save their world from consummate evil. ',
      posterURL: 'https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/81EBp0vOZZL.jpg',
      trailer:'https://www.youtube.com/embed/x8UAUAuKNcU',
      rating: 8.2,
    },
    {
      id: 3,
      title: 'Interstellar',
      description: 'Amélia, amoureuse d Edmunds, veut aller sur sa planète et tente de convaincre Cooper et Romilly en développant une théorie sur l amour transcendant le temps et l espace.',
      posterURL: 'https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/81kz06oSUeL.jpg',
      trailer:'https://www.youtube.com/embed/zSWdZVtXT7E',
      rating: 4.0,
    },
    {
      id: 4,
      title: 'Mr Robot',
      description: 'Elliot Alderson est un jeune informaticien vivant à New York, qui travaille en tant qu ingénieur en sécurité informatique pour Allsafe Security.',
      posterURL: 'https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/71eo2tqEdKL.jpg',
      trailer:'https://www.youtube.com/embed/xIBiJ_SzJTA',
      rating: 4.0,
    },
   
  ]);

  const [title, setTitle] = useState(''); // Définition d'un état "title" qui représente le titre d'un nouveau film, initialisé à une chaîne vide
  const [description, setDescription] = useState(''); // Définition d'un état "description" qui représente la description d'un nouveau film, initialisé à une chaîne vide
  const [posterURL, setPosterURL] = useState(''); // Définition d'un état "posterURL" qui représente l'URL de l'affiche d'un nouveau film, initialisé à une chaîne vide
  const [rating, setRating] = useState(''); // Définition d'un état "rating" qui représente la note d'un nouveau film, initialisé à une chaîne vide


  const [titleFilter, setTitleFilter] = useState('');
  const [ratingFilter, setRatingFilter] = useState(0);

  //localstorage
    const moviess = localStorage.getItem("movie");
    if (
      !moviess ||
      JSON.stringify(movies).length > JSON.stringify(moviess).length
    ) {
      localStorage.setItem("movie", JSON.stringify(movies));
    }
  
  
  
  // Définition d'une fonction qui ajoute un nouveau film à la liste de films
  const addMovie = () => {
    const newMovie = { id: movies.length + 1, title:title, description:description, posterURL:posterURL, rating:rating };
    setMovies([...movies, newMovie]);
    setTitle('');
    setDescription('');
    setPosterURL('');
    setRating('');
    
    // Add the new movie to the existing movies
    const updatedMovies = [...movies, newMovie];
    
    // Store the updated movies in local storage
    localStorage.setItem('movie', JSON.stringify(updatedMovies));
  };
  
const new_movie=JSON.parse(localStorage.getItem("movie"))
// Function to filter the movie list by title and rating
let handleFilterMovies = () => {
  return new_movie.filter(movie =>
    movie.title.toLowerCase().includes(titleFilter.toLowerCase())
    && movie.rating >= ratingFilter
  );
};

  // Render the component
  return (
    <div>

    <Header/>
    
    <div className='movies'>
    <Routes>
    <Route path="/" element={<>
      <div className="App">
    <Filter filterMovies={handleFilterMovies} titleFilter={titleFilter} ratingFilter={ratingFilter} setRatingFilter={setRatingFilter} setTitleFilter={setTitleFilter} />
    <MovieList movies={handleFilterMovies(titleFilter, ratingFilter)} />
    <div className="add-movie-container">
        <input type="text" placeholder="Movie Title" value={title} onChange={(e) => setTitle(e.target.value)} />
        <input type="text" placeholder="Movie Description" value={description} onChange={(e) => setDescription(e.target.value)} />
        <input type="text" placeholder="Movie Poster URL" value={posterURL} onChange={(e) => setPosterURL(e.target.value)} />
        <input type="text" placeholder="Movie Rating" value={rating} onChange={(e) => setRating(e.target.value)} />
        <button onClick={addMovie}>Add Movie</button>
      </div>
</div>
  </>} />

  <Route path="/:name/:id" element={<MovieDetails />} />
  </Routes> 
       
    </div>
    </div>
  );
}

export default App;







