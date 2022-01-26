import { Link } from 'react-router-dom';
import './styles.css';

const Login = () => {
    return (
      <div className="container-login">
        <h1>LOGIN</h1>
        <form className="form-login">
        <input type="text" placeholder="Email" className="form-control"/>
        <input type="password" placeholder="Senha" className="form-control"/>
        <p><Link to="/retrieve">Esqueci a senha?</Link></p>
        <div className="button-login">
        <Link to="/home"><button className="btn btn-success">FAZER LOGIN</button></Link>
        <p>Não tenho<span><Link to='/register'> CADASTRO</Link></span></p>
        </div>
        </form>
      </div>
    );
  };
  
  export default Login;