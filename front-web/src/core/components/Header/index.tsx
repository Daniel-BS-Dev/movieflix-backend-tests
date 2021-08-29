import './styles.scss';
import { Link, useLocation } from 'react-router-dom';
import { getAccessTokenDecoded, logout } from '../../utils/auth';
import { useState } from 'react';
import { useEffect } from 'react';


const HeaderBar = () => {
   const [currentUser, setCurrentUser] = useState('');
   const location = useLocation();

   useEffect(() => {
      const correntUserData = getAccessTokenDecoded();
      setCurrentUser(correntUserData.user_name);
   }, [location]);

   const handleLogout = (event: React.MouseEvent<HTMLAnchorElement>) =>{
           event.preventDefault();
           logout();
   }

  return (
  <header className="main-header btn btn-warning">
       {currentUser && (
         <Link to="/movies" className="title-header">
             <h4>MovieFlix</h4>
         </Link>
       )}
       {!currentUser && (
             <h4 className="title-header">MovieFlix</h4>
       )}
      
       {currentUser && (
         <div  className="container-exit">
            <a
              href="#logout"
              className="exit"
              onClick = {handleLogout}
            >
               sair
            </a>
        </div>
       )}
      
  </header>
     );
  }
export default HeaderBar;