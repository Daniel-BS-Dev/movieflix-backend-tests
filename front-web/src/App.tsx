
import './core/assets/styles/custom.scss';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Routes from './Routes';

const App = () =>{
    return (
        <>
          <ToastContainer />
          <Routes />
        </>
    );
}

export default App;