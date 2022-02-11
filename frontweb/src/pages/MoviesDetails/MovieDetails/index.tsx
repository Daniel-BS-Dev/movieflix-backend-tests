import axios, { AxiosRequestConfig } from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Movie } from "../../../Types/type";
import { BASE_URL, requestBackend } from "../../../utils/request";
import "./styles.css";

type UrlParams = {
  id: string;
};

const MovieDetails = () => {

  const { id } = useParams<UrlParams>();
  const [movie, setMovie] = useState<Movie>();
  const[isLoader, setIsLoader] = useState(false);

  useEffect(() => {
    const params: AxiosRequestConfig = {
      method: "GET",
      url: `/movies/${id}`,
      withCredentials: true,
    };

    setIsLoader(true);
    requestBackend(params)
      .then((response) => {
        setMovie(response.data);
      })
      .finally(() => {
        setIsLoader(false);
      });
  }, [id]);

  return (
    <section className="container-movie-details">
      { isLoader ? <h1 className="ready">Carregando...</h1> : <div className="content-movie-details">
        <img src={movie?.imgUri} />
        <div className="container-movie-details-info">
          <h2>{movie?.title}</h2>
          <h6>{movie?.year}</h6>
          <p>{movie?.subTitle}</p>
          <div className="container-movie-details-info-synopsis">
            <p>{movie?.synopsis}</p>
          </div>
        </div>
      </div>}
    </section>
  );
};

export default MovieDetails;
