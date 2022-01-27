import axios, { AxiosRequestConfig } from "axios";
import { useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import Select from "react-select";
import { toast } from "react-toastify";
import { Role, User } from "../../../Types/type";
import { requestBackend } from "../../../utils/request";
import "./styles.css";

const Register = () => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<User>();

  const [selectRoles, setSelectRoles] = useState<Role[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    requestBackend({ url: "/roles" }).then((response) => {
      setSelectRoles(response.data);
    });
  }, []);

  const onSubmit = (formData: User) => {
    const config: AxiosRequestConfig = {
      method: "POST",
      url: "/users",
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
    <div className="container-register">
      <h1>CADASTRO</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="form-register">
        <input
          type="text"
          placeholder="Nome"
          className={`form-control ${errors.name ? "is-invalid" : ""}`}
          {...register("name", {
            required: "Campo obrigatório",
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
        <Controller
          name="roles"
          rules={{ required: true }}
          control={control}
          render={({ field }) => (
            <Select
              {...field}
              placeholder="Perfil"
              options={selectRoles}
              classNamePrefix="select-register"
              isMulti
              getOptionLabel={(roles: Role) => roles.authority}
              getOptionValue={(roles: Role) => String(roles.id)}
            />
          )}
        />
        <div className="input-error">
          {errors.roles && (
            <div className="invalid-feedback d-block d-justify-start">
              campo obrigatório
            </div>
          )}
        </div>

        <div className="button-register">
          <button className="btn btn-success">CADASTRAR</button>
        </div>
      </form>
    </div>
  );
};

export default Register;
