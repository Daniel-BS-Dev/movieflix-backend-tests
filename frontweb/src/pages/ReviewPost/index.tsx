import { useForm } from "react-hook-form";
import { Reviews } from "../../Types/type";

type Props = {
    review: (text: Reviews) => void;
}

const ReviewPost = ({review}: Props) => {
  const {register, handleSubmit} = useForm<Reviews>();

  const onSubmit = (formData: Reviews) => {
      review(formData);
  };

  return (
    <form className="review" onSubmit={handleSubmit(onSubmit)}>
      <input
        type="text"
        placeholder="Deixe sua avaliação aqui"
        className='form-control'
        {...register("text")}
      />
      <button className="btn btn-success">SALVAR AVALIAÇÃO</button>
    </form>
  );
};

export default ReviewPost;
