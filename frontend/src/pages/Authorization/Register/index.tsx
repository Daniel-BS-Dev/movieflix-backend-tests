import './styles.css';

const Register = () => {
   return (
      <div className="container-register">
        <h1>CADASTRO</h1>
        <form className="form-register">
        <input type="text" placeholder="Name" className="form-control"/>
        <input type="text" placeholder="Email" className="form-control"/>
        <input type="password" placeholder="Senha" className="form-control"/>
        <input type="password" placeholder="Role" className="form-control"/>
        <div className="button-register">
        <button className="btn btn-success">CADASTRAR</button>
        </div>
        </form>
      </div>
    );
  };
  
  export default Register;