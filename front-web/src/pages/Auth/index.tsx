import Button from '../../core/components/Button';
import { useForm } from 'react-hook-form';
import './styles.scss';
import { makeLogin } from '../../core/utils/request';
import { useState } from 'react';
import { saveSessionData } from '../../core/utils/auth';
import { useHistory } from 'react-router-dom';

type FormData = {
    username: string;
    password: string;
}

const Auth = () => {
     const { register, handleSubmit, formState: { errors } } = useForm<FormData>();
     const [hasError, setHasError] = useState(false);
     const history = useHistory();

     const onSubmit = (data: FormData) => {
         makeLogin(data)
         .then(response => {
             setHasError(false);
             saveSessionData(response.data);
             history.push('/movies');
         })
         .catch(() => {
           setHasError(true)
         })
     }

    return (
        <div className="auth-container border-box">
            <div className="auth-login">
                LOGIN
            </div>
            {hasError && (
                 <div className="alert alert-danger alert">
                    <p className="auth-invalid">Usuário ou Senha Incorreto</p>
                 </div>
            )}
           
            <div>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="auth-content">
                        <input 
                            type="email" 
                            className={`form-control auth-form ${ errors.username ? 'is-invalid' : ''}`}
                            placeholder="Email"
                            {...register("username", 
                            { required: "Campo Obrigatório",
                              pattern: {
                                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                  message: "Email Inválid"
                              }
                            })}
                        />
                        {errors.username && (
                           <div className="invalid-feedback d-block invalid">
                               {errors.username.message}
                           </div>
                        )}
                    </div>
                    <div className="auth-content">
                        <input 
                            type="password" 
                            className={`form-control auth-form ${errors.password ? 'is-invalid' : ''}`}
                            placeholder="Senha"
                            {...register("password", 
                            { required: "Campo Obrigatório", minLength:6 })}
                        />
                        {errors.password && (
                            <div className="invalid-feedback d-block invalid">
                              {errors.password.message}
                            </div>
                        )}
                    </div>
                    <Button text="fazer login"/>
                </form>  
            </div>
        </div>
    );
}

export default Auth;