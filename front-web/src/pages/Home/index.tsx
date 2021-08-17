import './styles.scss';
import{ ReactComponent as Image } from '../../core/assets/images/img.svg';
import Auth from '../Auth';

const Home = () => {
   return(
      <div className="home-contanier">
         <div className="home-title">
            <h1>Avalie Filmes</h1>
            <p>Diga o que você achou do seu <br /> filme favorito</p>
            <Image />
         </div>
         <div >
           <Auth />
         </div>
      </div>
   );  
}

 export default Home;