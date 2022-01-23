import { ReactComponent as Auth } from "../../assets/auth.svg";
import { ReactComponent as Git } from "../../assets/git.svg";
import { Route, Routes } from "react-router-dom";
import Login from "./Login";
import Register from "./Register";
import Retrieve from "./Retrieve";
import "./styles.css";

const Authorization = () => {
  return (
    <div className="container-authorization">
      <div className="header-authorization">
        <h1>MovieFlix</h1>
        <a href="https://github.com/daniel-BS-dev" className="git-authorization" title= "github"  target= "_blank" rel="noreferrer">
          <Git />
          <address className="name-authorization">/daniel</address>
        </a>
      </div>
      <div className="container-links">
      <div className="info-text-authorization">
        <h1>MovieFlix</h1>
        <p>Diga o que você achou do seu<br/> filme favorito</p>
        <Auth />
      </div>
      <div className="links-authorization">
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/retrieve" element={<Retrieve />} />
        </Routes>
      </div>
      </div>
    </div>
  );
};

export default Authorization;
