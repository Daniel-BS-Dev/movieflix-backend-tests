import Button from '../../core/components/Button';
import './styles.scss';

const Auth = () => {
    return (
        <div className="auth-container">
            <div className="auth-login">
                LOGIN
            </div>
            <div>
                <form >
                    <input 
                    type="email" 
                    className="form-control auth-form"
                    placeholder="Email"
                    />
                    <input 
                    type="password" 
                    className="form-control auth-form"
                    placeholder="Senha"
                    />
                </form>
                <Button text="fazer login"/>
            </div>
        </div>
    );
}

export default Auth;