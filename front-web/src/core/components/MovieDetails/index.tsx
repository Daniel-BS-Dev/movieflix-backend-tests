import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { Movie } from "../../types/Movie";
import { isAllowedByRole } from "../../utils/auth";
import { makePrivateRequest } from "../../utils/request";
import MovieInfoLoader from "../Loaders/MovieDetailsLoader/Image";
import MovieImageLoader from "../Loaders/MovieInfoLoader";
import Review from "../Review";
import Show from "../Review/ShowReview";
import './styles.scss';


type ParamsType = {
    id : string;
}

const MovieDetails = () => {
    const {id} = useParams<ParamsType>();
    const [movie, setMovie] = useState<Movie>();
    const [isLoader, setIsLoader] = useState(false);

    
    useEffect (() => {
        setIsLoader(true);
        makePrivateRequest({url:`/movies/${id}`})
        .then (response => setMovie(response.data))
        .finally(() => {
            setIsLoader(false);
        })
    },[id]);

    return(
        
       <div className="movieDetails-container">
           <div className="movieDetails-content border-box">
           {isLoader ? <MovieInfoLoader /> : (
                 <>
                    <img src={movie?.imgUri} alt={movie?.title} className="movie-image" />
                    
                 </>
                 )}
                  {isLoader ? <MovieImageLoader /> : (
                  <>
                    <div className="movieDetails-info">
                   
                        <h1 className="movieDetails-title">
                              {movie?.title}
                         </h1>
                        <h3 className="movieDetails-year">
                            {movie?.year}
                            </h3>
                        <p className="movieDetails-subtitle"> 
                            {movie?.subTitle}
                            </p>
                    
                        <div className="movieDetails-description">
                            <p>
                                {movie?.synopsis}
                            </p>
                        </div>
                    </div>
                    </>
                    )}
            </div>
            {isAllowedByRole(['ROLE_MEMBER']) && (
                 <Review />
            )}
            
            <Show />
           </div>
    
           
    );
}

export default MovieDetails;

