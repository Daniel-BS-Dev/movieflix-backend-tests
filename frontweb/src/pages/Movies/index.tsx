import NavBar from "../../component/NavBar";
import Pagination from "../../component/Pagination";
import CardMovie from "../Movies/cardMovie";
import { Link } from "react-router-dom";
import "./styles.css";
import { Page } from "../../Types/type";
import { useEffect, useState } from "react";
import { AxiosRequestConfig } from "axios";
import { requestBackend } from "../../utils/request";
import { ProductFilterData } from "../../component/FilterMovie";


type ControlComponentsData = {
  activePage: number;
  filterData: ProductFilterData;

};

const Movies = () => {
  const [page, setPage] = useState<Page>();
  const [isLoader, setIsLoader] = useState(false);
  const [isActive, setIsActive] = useState(0);

  const [controlComponentsData, setControlComponentsData] =
  useState<ControlComponentsData>({
    activePage: 0,
    filterData: {
      name: "",
    },
  });

  useEffect(() => {
    const params: AxiosRequestConfig = {
      method: "GET",
      url: `/movies`,
      withCredentials: true,
      params: {
          page: isActive || controlComponentsData.activePage,
          linesPerPage: 8,
          title: controlComponentsData.filterData.name,
          
        },
    };

    setIsLoader(true);
    requestBackend(params)
      .then((response) => {
        setPage(response.data);
      })
      .finally(() => {
        setIsLoader(false);
      });
  }, [isActive, controlComponentsData]);

 function change (item: number){}

  return (
    <section className="movie-container" id="beginning">
      <NavBar 
         numberPage={(item: number) => change(item)}
         filterData={(data: ProductFilterData) => {
           setControlComponentsData({ activePage: 0, filterData: data });
         }}

      />
      <div className="container-list-card-movie">
        {isLoader ? (
          <h1 className="ready">Carregando...</h1>
        ) : (
          page?.content.map((movies) => (
            <Link to={`/movies/${movies.id}`} key={movies.id}>
              <CardMovie movie={movies} />
            </Link>
          ))
        )}
      </div>
      <div className="movies-pagination">
        <a href="#beginning">
          {page && (
            <Pagination
              totalPages={page?.totalPages}
              pageIsActive={isActive}
              onChange={(pageActive) => setIsActive(pageActive)}
            />
          )}
        </a>
      </div>
    </section>
  );
};

export default Movies;
