import { ReactComponent as Arrow } from "../../assets/arrow.svg";
import { AxiosRequestConfig } from "axios";
import { useCallback, useEffect, useState } from "react";
import NavBar from "../../component/NavBar";
import { Page } from "../../Types/type";
import { requestBackend } from "../../utils/request";
import Movies from "./Movie";
import SliderMovie from "./SliderMovie";
import "./styles.css";
import MovieSkeleton from "../../component/MyLoader/MovieSkeleton";

const Home = () => {
  const [movie, setMovie] = useState<Page>();
  const [isLoader, setIsLoader] = useState(false);
  const [isActive, setIsActive] = useState(0);
 
  const [familyMovie, setFamilyMovie] = useState<Page>();
  const [movieFamily, setMovieFamily] = useState(0);


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
  },[isActive]);

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
        page: movieFamily,
        linesPerPage: 3,
        genreId: 6,
      },
    };
    setIsLoader(true);
    requestBackend(params).then((response) => {
      setFamilyMovie(response.data);
    })
    .finally(() => setIsLoader(false));
  }, [movieFamily]);


  function onChange(item: number) {
    setMovieFamily(item);
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
          <h2>Familia</h2>
          <div className="home-container-button">
            <button
              className="button-left"
              onClick={() => onChange(movieFamily - 1)}
              disabled={familyMovie?.first}
            >
              <Arrow />
            </button>
            <button
              onClick={() => onChange(movieFamily + 1)}
              disabled={familyMovie?.last}
            >
              <Arrow />
            </button>
          </div>
          <div className="movies-home">
            {isLoader ? <MovieSkeleton /> : familyMovie &&
              familyMovie.content.map((movie) => (
                <Movies movie={movie} key={movie.id} />
              ))}
          </div>
        </div>

        <div className="catalog-movie-home">
          <h2>Ação</h2>

        </div>
       
        <div className="catalog-movie-home">
          <h2>Terror</h2>
         
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
