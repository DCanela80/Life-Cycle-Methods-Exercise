import { useState, useEffect } from 'react'
import { filterFilmsByDirector, getListOf } from '../helpers/film.helpers';
import '../App.css'

export default function FilmsPage() {
    const [searchDirector, setSearchDirector] = useState("");
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

  
  const filmsByDirector = filterFilmsByDirector(movies, searchDirector);
  const directors = getListOf(movies, "director");

  return (
    <>
     <h1>Studio Ghibli Movies</h1>

    <form>
        <div className="form-group">
            <label htmlFor="directorSelect">Filter Directors</label>
            <select
                onChange={(ev) => setSearchDirector(ev.target.value)}
                value={searchDirector}
                name="directorSelect" 
                id="directorSelect"
            >
            <option value="">All</option>
            {directors.map((directorName, index) => {
                return <option key={index} value={directorName}>{directorName}</option>
            })}
            </select>
        </div>
    </form>

     <ul className='moviesContainer'>
        {filmsByDirector.map((movie, index) => {
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



