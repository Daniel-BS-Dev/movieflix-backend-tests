import { useForm } from 'react-hook-form';
import Button from '../Button';
import './styles.scss';

type FormData = {
    review: string;
}

const Review = () => {
    const { register, handleSubmit } = useForm<FormData>();

    const onSubmit = (data: FormData) => {
        console.log(data);
    }

    return(
       <div className="review-container">
           <form onSubmit={handleSubmit(onSubmit)} className="review-content" >
               <input 
                 type="text" 
                 placeholder="Deixe sua avalição aqui!"
                 {...register("review", 
                 { required: true })}
                />
                <Button text="SALVAR AVALIAÇÃO" />
           </form>
           
       </div>
    );
}

export default Review;