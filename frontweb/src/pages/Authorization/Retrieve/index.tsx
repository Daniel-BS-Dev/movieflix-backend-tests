import { AxiosRequestConfig } from 'axios';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { requestBackend } from '../../../utils/request';
import './styles.css';

type Credencials = {
  email: string,
  newPassword: string,
  password: string
}

const Retrieve = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Credencials>();
  
  const navigate = useNavigate();

  const onSubmit = (formData: Credencials) => {

    const config: AxiosRequestConfig = {
      method: "PUT",
      url: '/users',
      data: formData,
      withCredentials: false,
    };

    requestBackend(config)
      .then(() => {
        navigate("/login");
        toast.success("Nova senha salva com sucesso");
      })
  };

    return (
     <div className="container-retrieve">
        <h1>RECUPERAR</h1>
        <form onSubmit={handleSubmit(onSubmit)} className="form-retrieve">
        <input
          type="email"
          placeholder="Email"
          className={`form-control ${errors.email ? "is-invalid" : ""}`}
          {...register("email", {
            required: "Campo obrigatório",
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: "Email inválido",
            },
          })}
        />
        <div className="invalid-feedback d-block  d-justify-start">
          {errors.email?.message}
        </div>

        <input
          type="password"
          placeholder="Senha"
          className={`input-register form-control ${
            errors.newPassword ? "is-invalid" : ""
          }`}
          {...register("newPassword", {
            required: "Campo obrigatório",
            pattern: {
              value: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/,
              message:
                "Senha deve ter letras maiúscula, minúscula e numero, devendo ter no minimo 8 caracter",
            },
          })}
        />

        <div className="invalid-feedback d-block d-justify-start">
          {errors.newPassword?.message}
        </div>

         <input
          type="password"
          placeholder="Senha"
          className={`input-register form-control ${
            errors.password ? "is-invalid" : ""
          }`}
          {...register("password", {
            required: "Campo obrigatório",
            pattern: {
              value: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/,
              message:
                "Senha deve ter letras maiúscula, minúscula e numero, devendo ter no minimo 8 caracter",
            },
          })}
        />

        <div className="invalid-feedback d-block d-justify-start">
          {errors.password?.message}
        </div>
        <div className="button-retrieve">
        <button className="btn btn-success">SALVAR SENHA</button>
        </div>
        </form>
      </div>
    );
  };
  
  export default Retrieve;