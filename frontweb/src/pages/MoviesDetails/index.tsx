import NavBar from "../../component/NavBar";
import MovieDetails from "./MovieDetails";
import Review from "./Review";
import "./styles.css";

const MoviesDetails = () => {
  return (
    <section className="container-movies-details">
     <NavBar />
     <div className="padding-movie">
     <MovieDetails />
     <section className="container-review">
       <form className="review">
         <input type='text' placeholder="Deixe sua avaliação aqui" className="form-control"/>
         <button className="btn btn-success">SALVAR AVALIAÇÃO</button>
       </form>
     </section>
     <section className="container-show-review">
      <Review />
      <Review />
      <Review />
      <Review />
     </section>
     </div>
    </section>
  );
};

export default MoviesDetails;