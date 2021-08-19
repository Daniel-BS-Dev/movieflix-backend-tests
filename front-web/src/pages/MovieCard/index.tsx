import Form from '../../core/components/Form';
import ImgImage  from '../../core/assets/images/image.png';
import './styles.scss';

const MovieCard = () => {
    return(
           <div className="movie-content">
              <img src={ImgImage} alt ="image" className="movie-image" />
              <div className="movie-inf">
                <h3 className="movie-title">
                    o retorno do rei
                </h3>
                <h4 className="movie-year">
                    2013
                </h4>
                <p className="movie-subtitle">
                   O olho do inimigo está se<br /> movendo.
                </p>
              </div>
           </div>
    );
}

export default MovieCard;