import { requestBackendLogin, saveAuthData } from "../../../utils/request";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from 'react-toastify';
import "./styles.css";


type Credencials = {
  username: string;
  password: string;
};

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Credencials>();
  const [hasError, setHasError] = useState(false);
  const navigate = useNavigate();

  const onSubmit = (formData: Credencials) => {
    requestBackendLogin(formData)
    .then((response) => {
      saveAuthData(response.data); 
      setHasError(false);
      navigate('/home');
      toast.success('LOGIN EFETUADO COM SUCESSO')
      })
      .catch((error) => {
        setHasError(true);
        console.log(error);
      });
  };

  return (
    <div className="container-login">
      <h1>LOGIN</h1>
      {hasError && (
        <div className="alert alert-danger">
          Erro ao efetuar login. Verifique os dados e tente novamente
        </div>
      )}

      <form className="form-login" onSubmit={handleSubmit(onSubmit)}>
        <input
          type="email"
          placeholder="Email"
          className={`form-control ${errors.username ? "is-invalid" : ""}`}
          {...register("username", {
            required: "Campo obrigatório",
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: "Email inválido",
            },
          })}
        />
        <div className="invalid-feedback d-block login-error">
          {errors.username?.message}
        </div>
        <input
          type="password"
          placeholder="Senha"
          className={`form-control login-input-password ${
            errors.password ? "is-invalid" : ""
          }`}
          {...register("password", { required: "Campo obrigatório" })}
        />
       
        <div className="invalid-feedback d-block">
          {errors.password?.message}
        </div>
        <p>
          <Link to="/retrieve">Esqueci a senha?</Link>
        </p>
        <div className="button-login">
          <button className="btn btn-success">FAZER LOGIN</button>
          <p>
            Não tenho cadastro?
            <span>
              <Link to="/register"> CADASTRAR</Link>
            </span>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Login;
