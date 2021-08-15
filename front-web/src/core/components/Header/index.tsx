import './styles.scss';
import { Link } from 'react-router-dom';

const HeaderBar = () => {
  return (
  <header className="main-header btn btn-warning">
        <Link to="/movie" className="title-header">
           <h4>MovieFlix</h4>
        </Link>
           
        
  </header>
     );
  }
export default HeaderBar;