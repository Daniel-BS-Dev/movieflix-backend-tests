import { AxiosRequestConfig } from 'axios';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { User } from "../../../Types/type";
import { requestBackend } from '../../../utils/request';
import './styles.css';


type ProductUrl = {
  email: string;
};

const Retrieve = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<User>();
  const { email } = useParams<ProductUrl>();

  const navigate = useNavigate();

    const onSubmit = (formData: User) => {
      console.log(formData);
    const config: AxiosRequestConfig = {
      method: "PUT",
      url: '/users',
      data: formData,
      withCredentials: false,
    };

    requestBackend(config)
      .then(() => {
        navigate("/login");
        toast.success("Cadastro realizado com sucesso");
      })
      .catch(() => {
        toast.error(
          "Email já existe. Verifique o email digitado e tente novamente"
        );
      });
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