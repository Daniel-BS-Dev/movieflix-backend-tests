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
     const { register, handleSubmit } = useForm<FormData>();
     const [hasError, setHasError] = useState(false);
     const history = useHistory();

     const onSubmit = (data: FormData) => {
         makeLogin(data)
         .then(response => {
             setHasError(false);
             saveSessionData(response.data);
             history.push('/movie');
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
                    Usuario ou senha incorreto
                 </div>
            )}
           
            <div>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input 
                    type="email" 
                    className="form-control auth-form"
                    placeholder="Email"
                    {...register("username", 
                    { required: true })}
                    />
                    <input 
                    type="password" 
                    className="form-control auth-form"
                    placeholder="Senha"
                    {...register("password", 
                    { required: true, minLength:6 })}
                    />
                    <Button text="fazer login"/>
                </form>  
            </div>
        </div>
    );
}

export default Auth;