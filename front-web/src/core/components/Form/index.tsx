import Select from "react-select";
import './styles.scss';


const options = [
    {value: '', label:'TODOS OS GÊNEROS'},
    {value: '1', label:'AÇÃO'},
    {value: '2', label:'AVENTURA'},
    {value: '3', label:'COMEDIA'},
    {value: '4', label:'ROMANCE'},
    {value: '5', label:'TERROR'},
    {value: '6', label:'FAMILIA'},
    {value: '7', label:'FANTANSIA'},
    {value: '8', label:'DRAMA'},

]
const Form = () => {
  return (

    <div className="form-container">
    <form className="form-content">
      <Select
        classNamePrefix="genres-select"
        placeholder="TODOS OS GÊNEROS"
        options={options} 
      />
      
    </form>
    </div>
  );
}

export default Form;