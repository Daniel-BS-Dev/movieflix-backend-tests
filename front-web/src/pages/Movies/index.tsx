import Form from '../../core/components/Form';
import MovieCard from '../MovieCard';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { makePrivateRequest} from '../../core/utils/request';
import './styles.scss';
import { useState } from 'react';
import { MoviesResponse } from '../../core/types/Movie';
import MovieCardLoader from '../../core/components/Loaders/MovieCardLoader';
import Pagination from '../../core/components/Pagination';


const Movie = () => {

    const [movieResponse, setMovieResponse] = useState<MoviesResponse>();
    const [isLoader, SetIsLoader] = useState(false);
    const [isActive, setIsActive] = useState(0);

    useEffect(() => {
        const params = {
           page: isActive,
           linesPerPage: 4,
        }

        SetIsLoader(true);
        makePrivateRequest({url:'/movies', params}) 
        .then(response => setMovieResponse(response.data))
        .finally(() => {
           SetIsLoader(false);
        })
    }, [isActive]);
   
    return(
       <div className="movie-container">
          <Form />
          <div className="movie-card">
             {isLoader ? <MovieCardLoader  /> : (
               movieResponse?.content.map(movie => (
                  <Link to={`/movies/${movie.id}`} key={movie.id}>
                      <MovieCard movie= {movie} />
                  </Link>
               ))
             )}
        </div>
          {movieResponse && (
            <Pagination 
               totalPages = {movieResponse.totalPages}
               isActive = {isActive}
               onChange = {page => setIsActive(page)}
            />
          )}
       </div>
    );
}

export default Movie;