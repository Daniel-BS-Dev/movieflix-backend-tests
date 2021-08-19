import Button from '../Button';
import './styles.scss';

const Review = () => {
    return(
       <div className="review-container">
           <form className="review-content">
               <input type="text" />
               <Button text="Salvar avaliação"/>
           </form>
           
       </div>
    );
}

export default Review;