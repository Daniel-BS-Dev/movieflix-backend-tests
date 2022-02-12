import { Link } from "react-router-dom";
import { Movie } from "../../../Types/type";
import "./styles.css";

type Props = {
  movie: Movie;
};

const Movies = ({ movie }: Props) => {
  return (
    <section className="container-movie-home">
         <Link to={`/movies/${movie.id}`}>
        <div className="content-movie-home">
          <img src={movie.imgUri} alt={movie.title}/>
        </div>

        <div className="container-name-movie">
          <h3>{movie.title}</h3>
        </div>
        </Link>
    </section>
  );
};

export default Movies;
