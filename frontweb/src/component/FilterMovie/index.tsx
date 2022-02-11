import { useForm } from "react-hook-form";
import { ReactComponent as Lupa } from "../../assets/lupa.svg";
import './styles.css';

export type ProductFilterData = {
    name: string;
};

type Props = {
    numberPage : (item : number) => void,
    filterData : (data : ProductFilterData) => void;
}

const FilterMovie = ({filterData, numberPage}: Props) => {

    const { register, handleSubmit, setValue} =
    useForm<ProductFilterData>();


    const onSubmit = (formData: ProductFilterData) => {
        filterData(formData);
        numberPage(0);
        setValue('name', '')
       
    }

    return (
        <form  onSubmit={handleSubmit(onSubmit)} className="form-filter-movie">
            <button className="svg-lupa" ><Lupa /></button>
            <input 
              type='text' 
              placeholder="Procurar"
              {...register('name')}
             
            />
        </form>
    )
}

export default FilterMovie;