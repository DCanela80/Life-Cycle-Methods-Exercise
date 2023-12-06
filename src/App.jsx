import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [movies, setMovies] = useState([]);
  
  useEffect(() => {
    fetch(`https://studioghibliapi-d6fc8.web.app/films`)
    .then(response => response.json())
    .then(data => {
      console.log(data);
      setMovies(data);
    })
    .catch(console.error)
  }, []);

  return (
    <>
     <h1>Studio Ghibli Movies</h1>
     <ul>
        {movies.map((movie, index) => {
          return <li key={movie.id}>
            <h2>{movie.title}</h2>
            <div>
              <img src={movie.image} alt={`$movie.title} poster`} />
              <p>Director: {movie.director}</p>
              <p>Runtime: {movie.running_time} min.</p>
              <p>Released: {movie.release_date} </p>
            </div>
          </li>
        } )}
     </ul>
    </>
  )
}

export default App

