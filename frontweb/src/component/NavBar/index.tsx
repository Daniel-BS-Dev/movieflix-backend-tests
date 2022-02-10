import { useContext, useEffect } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { ReactComponent as Home } from "../../assets/home.svg";
import { ReactComponent as Movie } from "../../assets/movie.svg";
import { AuthContext } from "../../ContextAuth";
import { getTokenData, isAuthenticated, removeToken } from "../../utils/request";
import FilterMovie from "../FilterMovie";
import "./styles.css";


const NavBar = () => {
  const {setAuthContextData } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated()) {
      setAuthContextData({
        isAuthenticated: true,
        token: getTokenData(),
      });
    } else {
      setAuthContextData({
        isAuthenticated: false,
      });
    }
  }, [setAuthContextData]);

  function handleClick(event: React.MouseEvent<HTMLAnchorElement>) {
    event.preventDefault();
    removeToken();
    setAuthContextData({
      isAuthenticated: false,
    });

    navigate('/');

  }

  return (
    <header className="container-navbar">
      <div className="content-navbar">
        <h1 className="navbar-title">MovieFlix</h1>
        <nav className="container-nav">
          <ul className="container-ul">
            <li className="li-search">
              <FilterMovie />
            </li>
            <li className="svg-home">
              <NavLink
                to="/home"
                className={({ isActive }) => (isActive ? "active" : "inactive")}
              >
                <Home />
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/movies">
                <Movie />
                Filmes
              </NavLink>
            </li>
          </ul>
          <h3>
            <Link to="#logout" className="nav-logout" onClick={handleClick}>
              sair
            </Link>
          </h3>
        </nav>
      </div>
    </header>
  );
};

export default NavBar;
