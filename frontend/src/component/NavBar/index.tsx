import { ReactComponent as Home } from "../../assets/home.svg";
import { ReactComponent as Movie } from "../../assets/movie.svg";
import FilterMovie from "../FilterMovie";
import "./styles.css";

const NavBar = () => {
  return (
    <header className="container-navbar">
      <div className="content-navbar">
        <h1 className="navbar-title">MovieFlix</h1>
        <nav className="container-nav">
          <ul className="conatiner-ul">
            <li className="li-search"><FilterMovie /></li>
            <li className="svg-home"><Home />Home</li>
            <li><Movie />Filmes</li>
          </ul>
          <h3>sair</h3>
        </nav>
      </div>
    </header>
  );
};

export default NavBar;
