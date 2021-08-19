import Form from '../../core/components/Form';
import ImgImage  from '../../core/assets/images/image.png';
import './styles.scss';
import MovieCard from '../MovieCard';

const Movie = () => {
    return(
       <div className="movie-container">
          <Form />
          <div className="movie-card">
          <MovieCard />
          <MovieCard />
          <MovieCard />
          <MovieCard />
          <MovieCard />
        </div>
       </div>
    );
}

export default Movie;