import NavBar from "../../component/NavBar";
import CardMovie from "../Movies/cardMovie";
import './styles.css';

const Movies = () => {
    return(
      <section className="movie-container">
        <NavBar />
        <div className="container-list-card-movie">
        <CardMovie />
        <CardMovie />
        <CardMovie />
        <CardMovie />
        <CardMovie />
        <CardMovie />
        <CardMovie />
        <CardMovie />
        </div>
      </section>
      
    )
  }
  
  export default Movies;