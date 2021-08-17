import './styles.scss';

type Props = {
    text: string;
}

const Button = ({text}: Props) =>{
    return(
       
          <button className="btn btn-warning button-container">
               <h3 className="button-title">
                   {text}
               </h3>
          </button>
            
         
       
    );
}
export default Button;