import Button from '../../core/components/Button';
import { useForm } from 'react-hook-form';
import './styles.scss';
import { makeLogin } from '../../core/utils/request';

type FormData = {
    username: string;
    password: string;
}

const Auth = () => {
     const { register, handleSubmit } = useForm<FormData>();

     const onSubmit = (data: FormData) => {
         console.log(data);
         makeLogin(data);
     }

    return (
        <div className="auth-container border-box">
            <div className="auth-login">
                LOGIN
            </div>
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
                    { required: true })}
                    />
                    <Button text="fazer login"/>
                </form>  
            </div>
        </div>
    );
}

export default Auth;