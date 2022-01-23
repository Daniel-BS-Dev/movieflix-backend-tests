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
        <div className="git-authorization">
          <Git />
          <address>/daniel</address>
        </div>
      </div>
      <div className="text-authorization">
        <h1>Authorization</h1>
      </div>
      <div className="links-authorization">
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/retrieve" element={<Retrieve />} />
        </Routes>
      </div>
    </div>
  );
};

export default Authorization;
