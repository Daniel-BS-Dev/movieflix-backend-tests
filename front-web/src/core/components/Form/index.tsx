import { useState } from "react";
import { useForm } from "react-hook-form";
import Select from "react-select";
import { GenreId, Movie} from "../../types/Movie";
import { makePrivateRequest } from "../../utils/request";
import './styles.scss';

type stateForm = {
  genreId? : GenreId;
}

const Form = () => {
  const {register, handleSubmit} = useForm< stateForm>();
  const [genres, setGenres] = useState<GenreId>();

  const onSubmit = (data:  stateForm) => {
    makePrivateRequest({url: '/genres'});
        console.log(data);

  }

  const options = [
    { value: {}, label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' }
  ]

  return (


    <div className="form-container border-box">
    <form  onSubmit={handleSubmit(onSubmit)} className="form-content">
      <Select
        classNamePrefix="genres-select"
        placeholder="TODOS OS GÊNEROS"
        options={options}
        //getOptionValue={(Option: GenreId) => Option.id}
        //getOptionLabel={(Option: GenreId) => Option.name} 
        
      />
      
    </form>
    </div>
  );
}

export default Form;