import { ReactComponent as Arrow } from "../../assets/arrow.svg";
import { AxiosRequestConfig } from "axios";
import { useEffect, useState } from "react";
import NavBar from "../../component/NavBar";
import { Page } from "../../Types/type";
import { requestBackend } from "../../utils/request";
import Movies from "./Movie";
import SliderMovie from "./SliderMovie";
import "./styles.css";
import MovieSkeleton from "../../component/MyLoader/MovieSkeleton";
import { ProductFilterData } from "../../component/FilterMovie";

type ControlComponentsData = {
  activePage: number;
  filterData: ProductFilterData;
};

const Home = () => {
  const [movie, setMovie] = useState<Page>();
  const [isLoader, setIsLoader] = useState(false);
  const [isActive, setIsActive] = useState(0);

  const [controlComponentsData, setControlComponentsData] =
    useState<ControlComponentsData>({
      activePage: 0,
      filterData: {
        name: "",
      },
    });

  const [familyMovie, setFamilyMovie] = useState<Page>();
  const [movieFamily, setMovieFamily] = useState(0);

  const [actionMovie, setActionMovie] = useState<Page>();
  const [movieAction, setMovieAction] = useState(0);

  const [horrorMovie, setHorrorMovie] = useState<Page>();
  const [movieHorror, setMovieHorror] = useState(0);

  const [comedyMovie, setComedyMovie] = useState<Page>();
  const [movieComedy, setMovieComedy] = useState(0);

  const [romanceMovie, setRomanceMovie] = useState<Page>();
  const [movieRomance, setMovieRomance] = useState(0);

  const [fantasyMovie, setFantasyMovie] = useState<Page>();
  const [movieFantasy, setMovieFantasy] = useState(0);

  const [adventureMovie, setAdventureMovie] = useState<Page>();
  const [movieAdventure, setMovieAdventure] = useState(0);

  const [dramaMovie, setDramaMovie] = useState<Page>();
  const [movieDrama, setMovieDrama] = useState(0);

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

  //family
  useEffect(() => {
    const params: AxiosRequestConfig = {
      method: "GET",
      url: "/movies",
      withCredentials: true,
      params: {
        page: movieFamily || controlComponentsData.activePage,
        linesPerPage: 3,
        title: controlComponentsData.filterData.name,
        genreId: 6,
      },
    };

    setIsLoader(true);
    requestBackend(params)
      .then((response) => {
        setFamilyMovie(response.data);
      })
      .finally(() => {
        setIsLoader(false);
      });
  }, [movieFamily, controlComponentsData]);

  function onChangeFamily(item: number) {
    setMovieFamily(item);
  }

  //action
  useEffect(() => {
    const params: AxiosRequestConfig = {
      method: "GET",
      url: "/movies",
      withCredentials: true,
      params: {
        page: movieAction || controlComponentsData.activePage,
        linesPerPage: 3,
        title: controlComponentsData.filterData.name,
        genreId: 1,
      },
    };

    setIsLoader(true);
    requestBackend(params)
      .then((response) => {
        setActionMovie(response.data);
      })
      .finally(() => {
        setIsLoader(false);
      });
  }, [movieAction, controlComponentsData]);

  function onChangeAction(item: number) {
    setMovieAction(item);
  }

  //horror
  useEffect(() => {
    const params: AxiosRequestConfig = {
      method: "GET",
      url: "/movies",
      withCredentials: true,
      params: {
        page: movieHorror || controlComponentsData.activePage,
        linesPerPage: 3,
        title: controlComponentsData.filterData.name,
        genreId: 5,
      },
    };

    setIsLoader(true);
    requestBackend(params)
      .then((response) => {
        setHorrorMovie(response.data);
      })
      .finally(() => {
        setIsLoader(false);
      });
  }, [movieHorror, controlComponentsData]);

  function onChangeHorror(item: number) {
    setMovieHorror(item);
  }

  //comedy
  useEffect(() => {
    const params: AxiosRequestConfig = {
      method: "GET",
      url: "/movies",
      withCredentials: true,
      params: {
        page: movieComedy || controlComponentsData.activePage,
        linesPerPage: 3,
        title: controlComponentsData.filterData.name,
        genreId: 3,
      },
    };

    setIsLoader(true);
    requestBackend(params)
      .then((response) => {
        setComedyMovie(response.data);
      })
      .finally(() => {
        setIsLoader(false);
      });
  }, [movieComedy, controlComponentsData]);

  function onChangedComedy(item: number) {
    setMovieComedy(item);
  }

  //romance
  useEffect(() => {
    const params: AxiosRequestConfig = {
      method: "GET",
      url: "/movies",
      withCredentials: true,
      params: {
        page: movieRomance || controlComponentsData.activePage,
        linesPerPage: 3,
        title: controlComponentsData.filterData.name,
        genreId: 4,
      },
    };

    setIsLoader(true);
    requestBackend(params)
      .then((response) => {
        setRomanceMovie(response.data);
      })
      .finally(() => {
        setIsLoader(false);
      });
  }, [movieRomance, controlComponentsData]);

  function onChangeRomance(item: number) {
    setMovieRomance(item);
  }

  //fantasy
  useEffect(() => {
    const params: AxiosRequestConfig = {
      method: "GET",
      url: "/movies",
      withCredentials: true,
      params: {
        page: movieFantasy || controlComponentsData.activePage,
        linesPerPage: 3,
        title: controlComponentsData.filterData.name,
        genreId: 7,
      },
    };

    setIsLoader(true);
    requestBackend(params)
      .then((response) => {
        setFantasyMovie(response.data);
      })
      .finally(() => {
        setIsLoader(false);
      });
  }, [movieFantasy, controlComponentsData]);

  function onChangeFantasy(item: number) {
    setMovieFantasy(item);
  }

  //adventure
  useEffect(() => {
    const params: AxiosRequestConfig = {
      method: "GET",
      url: "/movies",
      withCredentials: true,
      params: {
        page: movieAdventure || controlComponentsData.activePage,
        linesPerPage: 3,
        title: controlComponentsData.filterData.name,
        genreId: 2,
      },
    };

    setIsLoader(true);
    requestBackend(params)
      .then((response) => {
        setAdventureMovie(response.data);
      })
      .finally(() => {
        setIsLoader(false);
      });
  }, [movieAdventure, controlComponentsData]);

  function onChangeAdventure(item: number) {
    setMovieAdventure(item);
  }

  //drama
  useEffect(() => {
    const params: AxiosRequestConfig = {
      method: "GET",
      url: "/movies",
      withCredentials: true,
      params: {
        page: movieDrama || controlComponentsData.activePage,
        linesPerPage: 3,
        title: controlComponentsData.filterData.name,
        genreId: 8,
      },
    };

    setIsLoader(true);
    requestBackend(params)
      .then((response) => {
        setDramaMovie(response.data);
      })
      .finally(() => {
        setIsLoader(false);
      });
  }, [movieDrama, controlComponentsData]);

  function onChangeDrama(item: number) {
    setMovieDrama(item);
  }

  function change(item: number) {
    setMovieFamily(item);
    setMovieAction(item);
    setMovieHorror(item);
    setMovieComedy(item);
    setMovieRomance(item);
    setMovieFantasy(item);
    setMovieAdventure(item);
    setMovieDrama(item);
  }

  return (
    <section className="container-home">
      <div className="navbar-home">
        <NavBar
          numberPage={(item: number) => change(item)}
          filterData={(data: ProductFilterData) => {
            setControlComponentsData({ activePage: 0, filterData: data });
          }}
        />
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
              onClick={() => onChangeFamily(movieFamily - 1)}
              disabled={familyMovie?.first}
            >
              <Arrow />
            </button>
            <button
              onClick={() => onChangeFamily(movieFamily + 1)}
              disabled={familyMovie?.last}
            >
              <Arrow />
            </button>
          </div>
          <div className="movies-home">
            {isLoader ? (
              <MovieSkeleton />
            ) : familyMovie?.content.length === 0 ? (
              <div className="not-found">
                <p>Filme não foi encontrado! Veja nos proximos generos</p>
              </div>
            ) : (
              familyMovie &&
              familyMovie.content.map((movie) => (
                <Movies movie={movie} key={movie.id} />
              ))
            )}
          </div>
        </div>

        <div className="catalog-movie-home">
          <h2>Ação</h2>
          <div className="home-container-button">
            <button
              className="button-left"
              onClick={() => onChangeAction(movieAction - 1)}
              disabled={actionMovie?.first}
            >
              <Arrow />
            </button>
            <button
              onClick={() => onChangeAction(movieAction + 1)}
              disabled={actionMovie?.last}
            >
              <Arrow />
            </button>
          </div>
          <div className="movies-home">
            {isLoader ? (
              <MovieSkeleton />
            ) : actionMovie?.content.length === 0 ? (
              <div className="not-found">
                <p>Filme não foi encontrado! Veja nos proximos generos</p>
              </div>
            ) : (
              actionMovie &&
              actionMovie.content.map((movie) => (
                <Movies movie={movie} key={movie.id} />
              ))
            )}
          </div>
        </div>

        <div className="catalog-movie-home">
          <h2>Terror</h2>
          <div className="home-container-button">
            <button
              className="button-left"
              onClick={() => onChangeHorror(movieHorror - 1)}
              disabled={horrorMovie?.first}
            >
              <Arrow />
            </button>
            <button
              onClick={() => onChangeHorror(movieHorror + 1)}
              disabled={horrorMovie?.last}
            >
              <Arrow />
            </button>
          </div>
          <div className="movies-home">
            {isLoader ? (
              <MovieSkeleton />
            ) : horrorMovie?.content.length === 0 ? (
              <div className="not-found">
                <p>Filme não foi encontrado! Veja nos proximos generos</p>
              </div>
            ) : (
              horrorMovie &&
              horrorMovie.content.map((movie) => (
                <Movies movie={movie} key={movie.id} />
              ))
            )}
          </div>
        </div>

        <div className="catalog-movie-home">
          <h2>Comedia</h2>
          <div className="home-container-button">
            <button
              className="button-left"
              onClick={() => onChangedComedy(movieComedy - 1)}
              disabled={comedyMovie?.first}
            >
              <Arrow />
            </button>
            <button
              onClick={() => onChangedComedy(movieComedy + 1)}
              disabled={comedyMovie?.last}
            >
              <Arrow />
            </button>
          </div>
          <div className="movies-home">
            {isLoader ? (
              <MovieSkeleton />
            ) : comedyMovie?.content.length === 0 ? (
              <div className="not-found">
                <p>Filme não foi encontrado! Veja nos proximos generos</p>
              </div>
            ) : (
              comedyMovie &&
              comedyMovie.content.map((movie) => (
                <Movies movie={movie} key={movie.id} />
              ))
            )}
          </div>
        </div>

        <div className="catalog-movie-home">
          <h2>Romance</h2>
          <div className="home-container-button">
            <button
              className="button-left"
              onClick={() => onChangeRomance(movieRomance - 1)}
              disabled={romanceMovie?.first}
            >
              <Arrow />
            </button>
            <button
              onClick={() => onChangeRomance(movieRomance + 1)}
              disabled={romanceMovie?.last}
            >
              <Arrow />
            </button>
          </div>
          <div className="movies-home">
            {isLoader ? (
              <MovieSkeleton />
            ) : romanceMovie?.content.length === 0 ? (
              <div className="not-found">
                <p>Filme não foi encontrado! Veja nos proximos generos</p>
              </div>
            ) : (
              romanceMovie &&
              romanceMovie.content.map((movie) => (
                <Movies movie={movie} key={movie.id} />
              ))
            )}
          </div>
        </div>

        <div className="catalog-movie-home">
          <h2>Fantasia</h2>
          <div className="home-container-button">
            <button
              className="button-left"
              onClick={() => onChangeFantasy(movieFantasy - 1)}
              disabled={fantasyMovie?.first}
            >
              <Arrow />
            </button>
            <button
              onClick={() => onChangeFantasy(movieFantasy + 1)}
              disabled={fantasyMovie?.last}
            >
              <Arrow />
            </button>
          </div>
          <div className="movies-home">
            {isLoader ? (
              <MovieSkeleton />
            ) : fantasyMovie?.content.length === 0 ? (
              <div className="not-found">
                <p>Filme não foi encontrado! Veja nos proximos generos</p>
              </div>
            ) : (
              fantasyMovie &&
              fantasyMovie.content.map((movie) => (
                <Movies movie={movie} key={movie.id} />
              ))
            )}
          </div>
        </div>

        <div className="catalog-movie-home">
          <h2>Aventura</h2>
          <div className="home-container-button">
            <button
              className="button-left"
              onClick={() => onChangeAdventure(movieAdventure - 1)}
              disabled={adventureMovie?.first}
            >
              <Arrow />
            </button>
            <button
              onClick={() => onChangeAdventure(movieAdventure + 1)}
              disabled={adventureMovie?.last}
            >
              <Arrow />
            </button>
          </div>
          <div className="movies-home">
            {isLoader ? (
              <MovieSkeleton />
            ) : adventureMovie?.content.length === 0 ? (
              <div className="not-found">
                <p>Filme não foi encontrado! Veja nos proximos generos</p>
              </div>
            ) : (
              adventureMovie &&
              adventureMovie.content.map((movie) => (
                <Movies movie={movie} key={movie.id} />
              ))
            )}
          </div>
        </div>

        <div className="catalog-movie-home">
          <h2>Trama</h2>
          <div className="home-container-button">
            <button
              className="button-left"
              onClick={() => onChangeDrama(movieDrama - 1)}
              disabled={dramaMovie?.first}
            >
              <Arrow />
            </button>
            <button
              onClick={() => onChangeDrama(movieDrama + 1)}
              disabled={dramaMovie?.last}
            >
              <Arrow />
            </button>
          </div>
          <div className="movies-home">
            {isLoader ? (
              <MovieSkeleton />
            ) : dramaMovie?.content.length === 0 ? (
              <div className="not-found">
                <p>Filme não foi encontrado! Veja nos proximos generos</p>
              </div>
            ) : (
              dramaMovie &&
              dramaMovie.content.map((movie) => (
                <Movies movie={movie} key={movie.id} />
              ))
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
