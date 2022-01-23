import './styles.css';

const Retrieve = () => {
    return (
     <div className="container-retrieve">
        <h1>RECUPERAR</h1>
        <form className="form-retrieve">
        <input type="text" placeholder="Email" className="form-control"/>
        <input type="password" placeholder="Nova Senha" className="form-control"/>
        <input type="password" placeholder="Repita a Senha" className="form-control"/>
        <div className="button-retrieve">
        <button className="btn btn-success">SALVAR SENHA</button>
        </div>
        </form>
      </div>
    );
  };
  
  export default Retrieve;