import NavBar from "../../component/NavBar";
import Pagination from "../../component/Pagination";
import CardMovie from "../Movies/cardMovie";
import { Link } from 'react-router-dom';
import "./styles.css";

const Movies = () => {
  return (
    <section className="movie-container" id="beginning">
      <NavBar />
      <div className="container-list-card-movie">
        <Link to="/movies/1">
        <CardMovie />
        </Link>
        <CardMovie />
        <CardMovie />
        <CardMovie />
        <CardMovie />
      </div>
      <div className="movies-pagination">
        <a href="#beginning">
          <Pagination />
        </a>
      </div>
    </section>
  );
};

export default Movies;
