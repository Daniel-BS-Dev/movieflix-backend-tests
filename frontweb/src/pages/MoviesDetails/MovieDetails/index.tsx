import { Movie } from "../../../Types/type";
import "./styles.css";


type Props = {
  movie: Movie;
}

const MovieDetails = ({movie} : Props) => {

  return (
    <section className="container-movie-details">
      {<div className="content-movie-details">
        <img src={movie?.imgUri} />
        <div className="container-movie-details-info">
          <h2>{movie?.title}</h2>
          <h6>{movie?.year}</h6>
          <p>{movie?.subTitle}</p>
          <div className="container-movie-details-info-synopsis">
            <p>{movie?.synopsis}</p>
          </div>
        </div>
      </div>}
    </section>
  );
};

export default MovieDetails;
