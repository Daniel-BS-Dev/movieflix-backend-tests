import { useParams } from "react-router-dom";
import ImgImage  from '../../../core/assets/images/image.png';
import Review from "../Review";
import Show from "../Review/ShowReview";
import './styles.scss';

type ParamsType = {
    id : string;
}

const MovieDetails = () => {
    const {id} = useParams<ParamsType>();
    console.log(id);

    return(
        <div className="movieDetails-container">
            <div className="movieDetails-content border-box">
               <img src={ImgImage} alt="movie flix" className="movie-image" />
               <div className="movieDetails-info">
                   <h1 className="movieDetails-title">O Retorno do rei</h1>
                   <h3 className="movieDetails-year">2013</h3>
                   <p className="movieDetails-subtitle"> O olho do inimigo está se movendo.</p>
                   <div className="movieDetails-description">
                      <p>
                          O confronto final entre as forças do bem e do mal que<br />
                          lutam pelo controle do futuro da Terra Média se <br />
                          aproxima. Sauron planeja um grande ataque a Minas <br />
                          Tirith, capital de Gondor, o que faz com que Gandalf e<br />
                          Pippin partam para o local na intenção de ajudar a<br />
                          resistência. Um exército é reunido por Theoden em <br />
                          Rohan, em mais uma tentativa de deter as forças de <br />
                          Sauron. Enquanto isso, Frodo, Sam e Gollum seguem<br />
                          sua viagem rumo à Montanha da Perdição para destruir<br />
                          o anel.
                      </p>
                   </div>
               </div>
            </div>
            <Review />
            <Show />
           </div>
    
           
    );
}

export default MovieDetails;