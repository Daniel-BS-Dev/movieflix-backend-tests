import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "bootstrap/dist/css/bootstrap.css";
import DRoutes from "./Route";
import "./App.css";

function App() {
  return(
    <>
    <DRoutes />
    <ToastContainer />
    </>
  );
}

export default App;
