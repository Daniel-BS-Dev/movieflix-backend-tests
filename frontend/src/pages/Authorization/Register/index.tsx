import { useState } from 'react';
import { useForm } from 'react-hook-form';
import './styles.css';

type Credencials = {
  name: string;
  email: string;
  password: string;
 
};

const Register = () => {
  const { register, handleSubmit, formState: { errors }} = useForm<Credencials>();
  const [hasError, setHasError] = useState(false);

  const onSubmit = (formData: Credencials) => {
    console.log('sucesso', formData);
  };


   return (
      <div className="container-register">
        <h1>CADASTRO</h1>
        <form onSubmit={handleSubmit(onSubmit)} className="form-register">
        <input
          type="text"
          placeholder="Nome"
          className={`form-control ${errors.name ? "is-invalid" : ""}`}
          {...register("name", {
            required: "Campo obrigatório"
          })}
        />
        <div className="invalid-feedback d-block  d-justify-start">
          {errors.name?.message}
        </div>
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
          className={`form-control login-input-password ${
            errors.password ? "is-invalid" : ""
          }`}
          {...register("password", { required: "Campo obrigatório" })}
        />
       
        <div className="invalid-feedback d-block d-justify-start">
          {errors.password?.message}
        </div>
        <input type="password" placeholder="Role" className="form-control"/>
        <div className="invalid-feedback d-block d-justify-start">
          {errors.password?.message}
        </div>
        <div className="button-register">
        <button className="btn btn-success">CADASTRAR</button>
        </div>
        </form>
      </div>
    );
  };
  
  export default Register;