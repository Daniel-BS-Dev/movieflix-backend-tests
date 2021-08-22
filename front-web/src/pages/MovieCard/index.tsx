import { Movie } from '../../core/types/Movie';
import './styles.scss';

type Props = {
    movie: Movie;
}

const MovieCard = ({movie}: Props) => {
    return(
           <div className="movie-content border-box">
              <img src={movie.imgUri} alt={movie.title} className="movie-image" />
              <div className="movie-inf">
                <h3 className="movie-title">
                    {movie.title}
                </h3>
                <h4 className="movie-year">
                    {movie.year}
                </h4>
                <p className="movie-subtitle">
                   {movie.subTitle}
                </p>
              </div>
           </div>
    );
}

export default MovieCard;