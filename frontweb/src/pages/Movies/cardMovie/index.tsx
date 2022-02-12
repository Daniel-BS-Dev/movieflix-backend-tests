import { Movie } from "../../../Types/type";
import "./styles.css";

type Props = {
  movie: Movie;
}

const CardMovie = ({movie} : Props) => {
  
  return (
    <section className="container-card-movie">
      <img src={movie?.imgUri} />
      <div className="container-card-movie-info">
        <h2>{movie?.title}</h2>
        <h4>{movie?.year}</h4>
        <p>{movie?.subTitle}</p>
      </div>
    </section>
  );
};

export default CardMovie;
