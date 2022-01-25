import NavBar from "../../component/NavBar";
import Movie from "./Movie";
import SliderMovie from "./SliderMovie";
import './styles.css';


const Home = () => {

  return (
      <section className="container-home">
      <div className="navbar-home"><NavBar /></div>
      <div className="slider-home"><SliderMovie /></div> 
      <div className="list-image-home">
       <div className="catalog-movie-home">
         <h2>Acão</h2>
         <div className="movies-home">
         <Movie />
         <Movie />
         <Movie />
        
         </div> 
       </div>
       <div className="catalog-movie-home">
         <h2>Terror</h2>
         <div className="movies-home">
         <Movie />
         <Movie />
         <Movie />
         
         </div> 
          <div className="movies-home"> 
       </div>
       <div className="catalog-movie-home">
         <h2>Aventura</h2>
         <div className="movies-home">
         <Movie />
         <Movie />
         <Movie />
        
         </div>      
       </div>
       <div className="catalog-movie-home">
         <h2>Comedia</h2>
         <div className="movies-home">
         <Movie />
         <Movie />
         <Movie />
        
         </div>       
       </div>
       <div className="catalog-movie-home">
         <h2>Romance</h2>
         <div className="movies-home">
         <Movie />
         <Movie />
         <Movie />
        
         </div>      
       </div>
       <div className="catalog-movie-home">
         <h2>Fantasia</h2>
         <div className="movies-home">
         <Movie />
         <Movie />
         <Movie />
        
         </div>      
       </div>
       <div className="catalog-movie-home">
         <h2>Familia</h2>
         <div className="movies-home">
         <Movie />
         <Movie />
         <Movie />
      
         </div>       
       </div>
       <div className="catalog-movie-home">
         <h2>Trama</h2>
         <div className="movies-home">
         <Movie />
         <Movie />
         <Movie />
        
         </div> 
        </div>
       </div>
      </div>
      </section>
  

  );
};

export default Home;
