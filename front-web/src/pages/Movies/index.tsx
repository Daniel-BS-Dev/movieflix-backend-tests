import Form from '../../core/components/Form';
import MovieCard from '../MovieCard';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { makePrivateRequest} from '../../core/utils/request';
import './styles.scss';
import { useState } from 'react';
import { MoviesResponse } from '../../core/types/Movie';


const Movie = () => {

    const [movieResponse, setMovieResponse] = useState<MoviesResponse>();
       console.log(movieResponse);

    useEffect(() => {
        const params = {
           page: 0,
           linePerPage: 5,
        }

        makePrivateRequest({url:'/movies', params}) 
        .then(response => setMovieResponse(response.data));
    }, []);
   
    return(
       <div className="movie-container">
          <Form />
          <div className="movie-card">
             {movieResponse?.content.map(movie => (
                  <Link to="/movies/1" key={movie.id}>
                      <MovieCard movie= {movie} />
                  </Link>
             ))}
        </div>
       </div>
    );
}

export default Movie;