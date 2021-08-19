import Form from '../../core/components/Form';
import './styles.scss';
import MovieCard from '../MovieCard';
import { Link } from 'react-router-dom';

const Movie = () => {
    return(
       <div className="movie-container">
          <Form />
          <div className="movie-card">
              <Link to="/movie/1"><MovieCard /></Link>
              <Link to="/movie/2"><MovieCard /></Link>
              <Link to="/movie/3"><MovieCard /></Link>
              <Link to="/movie/4"><MovieCard /></Link>
              
                
            
        </div>
       </div>
    );
}

export default Movie;