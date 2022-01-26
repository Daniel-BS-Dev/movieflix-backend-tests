import NavBar from "../../component/NavBar";
import './styles.css';

const MovieDetails = () => {
    return(
       <section className="container-movie-details">
           <NavBar />
           <div className="content-movie-details">
               <h1>Details movies</h1>
           </div>
       </section>
    )
  }
  
  export default MovieDetails;