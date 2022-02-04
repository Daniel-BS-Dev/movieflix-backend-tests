import { ReactComponent as Arrow } from "../../assets/arrow.svg";
import { AxiosRequestConfig } from "axios";
import { useEffect, useState } from "react";
import NavBar from "../../component/NavBar";
import { Page } from "../../Types/type";
import { requestBackend } from "../../utils/request";
import Movies from "./Movie";
import SliderMovie from "./SliderMovie";
import "./styles.css";

const Home = () => {
  const [movie, setMovie] = useState<Page>();
  const [actionMovie, setActionMovie] = useState<Page>();
  const [adventureMovie, setAdventureMovie] = useState<Page>();
  const [horrorMovie, setHorrorMovie] = useState<Page>();
  const [isLoader, setIsLoader] = useState(false);
  const [isActive, setIsActive] = useState(0);
  const [movieActive, setMovieActive] = useState(0);

  useEffect(() => {
    const params: AxiosRequestConfig = {
      method: "GET",
      url: "/movies",
      withCredentials: true,
      params: {
        page: isActive,
        linesPerPage: 1,
      },
    };

    requestBackend(params).then((response) => {
      setMovie(response.data);
    });
  }, [isActive]);

  function changeImage() {
    (movie && movie.totalElements - 1) !== isActive
      ? setIsActive(isActive + 1)
      : setIsActive(0);
  }

  setTimeout(changeImage, 15000);

  useEffect(() => {
    const params: AxiosRequestConfig = {
      method: "GET",
      url: "/movies",
      withCredentials: true,
      params: {
        page: movieActive,
        linesPerPage: 3,
        genreId: 1,
      },
    };

    requestBackend(params).then((response) => {
      setActionMovie(response.data);
    });
  }, [movieActive]);

  useEffect(() => {
    const params: AxiosRequestConfig = {
      method: "GET",
      url: "/movies",
      withCredentials: true,
      params: {
        page: movieActive,
        linesPerPage: 3,
        genreId: 2,
      },
    };

    requestBackend(params).then((response) => {
      setAdventureMovie(response.data);
    });
  }, [movieActive]);

  useEffect(() => {
    const params: AxiosRequestConfig = {
      method: "GET",
      url: "/movies",
      withCredentials: true,
      params: {
        page: movieActive,
        linesPerPage: 3,
        genreId: 5,
      },
    };

    requestBackend(params).then((response) => {
      setHorrorMovie(response.data);
    });
  }, [movieActive]);

  function onChange(item: number) {
    setMovieActive(item);
  }

  return (
    <section className="container-home">
      <div className="navbar-home">
        <NavBar />
      </div>
      <div className="slider-home">
        {movie && <SliderMovie movies={movie.content} />}
      </div>
      <div className="list-image-home">
      <div className="catalog-movie-home">
          <h2>Aventura</h2>
          <div className="home-container-button">
            <button
              className="button-left"
              onClick={() => onChange(movieActive - 1)}
              disabled={adventureMovie?.first}
            >
              <Arrow />
            </button>
            <button
              onClick={() => onChange(movieActive + 1)}
              disabled={adventureMovie?.last}
            >
              <Arrow />
            </button>
          </div>
          <div className="movies-home">
            {adventureMovie &&
              adventureMovie.content.map((movie) => (
                <Movies movie={movie} key={movie.id} />
              ))}
          </div>
        </div>

        <div className="catalog-movie-home">
          <h2>Acão</h2>
          <div className="home-container-button">
            <button
              className="button-left"
              onClick={() => onChange(movieActive - 1)}
              disabled={actionMovie?.first}
            >
              <Arrow />
            </button>
            <button
              onClick={() => onChange(movieActive + 1)}
              disabled={actionMovie?.last}
            >
              <Arrow />
            </button>
          </div>
          <div className="movies-home">
            {actionMovie &&
              actionMovie.content.map((movie) => (
                <Movies movie={movie} key={movie.id} />
              ))}
          </div>
        </div>
       
        <div className="catalog-movie-home">
          <h2>Terror</h2>
          <div className="home-container-button">
            <button
              className="button-left"
              onClick={() => onChange(movieActive - 1)}
              disabled={horrorMovie?.first}
            >
              <Arrow />
            </button>
            <button
              onClick={() => onChange(movieActive + 1)}
              disabled={horrorMovie?.last}
            >
              <Arrow />
            </button>
          </div>
          <div className="movies-home">
            {horrorMovie &&
              horrorMovie.content.map((movie) => (
                <Movies movie={movie} key={movie.id} />
              ))}
          </div>
        </div>
        
        <div className="catalog-movie-home">
          <h2>Comedia</h2>
        </div>
        <div className="catalog-movie-home">
          <h2>Romance</h2>
        </div>
        <div className="catalog-movie-home">
          <h2>Fantasia</h2>
        </div>
        <div className="catalog-movie-home">
          <h2>Familia</h2>
        </div>
        <div className="catalog-movie-home">
          <h2>Trama</h2>
        </div>
      </div>
    </section>
  );
};

export default Home;
