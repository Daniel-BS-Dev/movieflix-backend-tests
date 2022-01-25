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
       <div>
         <h2>Acão</h2>
         <Movie />
       </div>
       <div>
         <h2>Terror</h2>
         <Movie />
       </div>
       <div>
         <h2>Aventura</h2>
         <Movie />
       </div>
       <div>
         <h2>Comedia</h2>
         <Movie />
       </div>
       <div>
         <h2>Romance</h2>
         <Movie />
       </div>
       <div>
         <h2>Fantasia</h2>
         <Movie />
       </div>
       <div>
         <h2>Familia</h2>
         <Movie />
       </div>
       <div>
         <h2>Trama</h2>
         <Movie />
       </div>
      </div>
      </section>
  

  );
};

export default Home;
