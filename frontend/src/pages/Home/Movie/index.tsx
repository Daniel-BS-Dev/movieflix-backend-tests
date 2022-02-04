import { Movie } from "../../../Types/type";
import "./styles.css";

type Props = {
  movie: Movie;
};

const Movies = ({ movie }: Props) => {
  return (
    <section className="container-movie-home">
      <div className="content-movie-home">
        <img src={movie.imgUri} />
      </div>

      <div className="container-name-movie">
        <h3>{movie.title}</h3>
      </div>
    </section>
  );
};

export default Movies;
