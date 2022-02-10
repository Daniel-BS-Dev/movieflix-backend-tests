import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "bootstrap/dist/css/bootstrap.css";
import DRoutes from "./Route";
import "./App.css";
import { useState } from 'react';
import { AuthContext, AuthContextData } from './ContextAuth';

function App() {

  const [authContextData, setAuthContextData] = useState<AuthContextData>({
    isAuthenticated: false,
  });

  return(
    <AuthContext.Provider value={{ authContextData, setAuthContextData }}>
    <DRoutes />
    <ToastContainer />
    </AuthContext.Provider>
  );
}

export default App;
