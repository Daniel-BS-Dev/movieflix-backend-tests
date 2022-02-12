import { AxiosRequestConfig } from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import NavBar from "../../component/NavBar";
import { Movie, Reviews } from "../../Types/type";
import { hasAnyRoles, requestBackend } from "../../utils/request";
import ReviewPost from "../ReviewPost";
import MovieDetails from "./MovieDetails";
import Review from "./Review";
import "./styles.css";

type UrlParams = {
  id: string;
};

const MoviesDetails = () => {
  const { id } = useParams<UrlParams>();
  const [movie, setMovie] = useState<Movie>();
  const [isLoader, setIsLoader] = useState(false);

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

  function handleOnClick(formData: Reviews) {
    const data = {
      ...formData,
      movieId: Number(id),
    };

    const config: AxiosRequestConfig = {
      method: "POST",
      url: "/reviews",
      data,
      withCredentials: true,
    };
    requestBackend(config)
      .then(() => {
        document.location.reload();
      })
      .finally(() => {
        toast.success("Comentario Salvo com sucesso");
      });
  }

  return (
    <section className="container-movies-details">
      <NavBar />
      <div className="padding-movie">
        {isLoader ? (
          <h1 className="ready">Carregando...</h1>
        ) : (
          movie && <MovieDetails movie={movie} />
        )}
        {hasAnyRoles(["ROLE_MEMBER"]) && (
          <section className="container-review">
            <ReviewPost review={(text) => handleOnClick(text)} />
          </section>
        )}
        {isLoader ? (
          <h1 className="ready">Carregando...</h1>
        ) : movie && movie.reviews.length === 0 ? (
          ""
        ) : (
          <section className="container-show-review">
            {movie &&
              movie.reviews.map((reviews) => (
                <Review reviews={reviews} key={reviews.id} />
              ))}
          </section>
        )}
      </div>
    </section>
  );
};

export default MoviesDetails;
