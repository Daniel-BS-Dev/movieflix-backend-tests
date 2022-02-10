import { ReactComponent as Lupa } from "../../assets/lupa.svg";
import './styles.css';

const FilterMovie = () => {
    return (
        <form className="form-filter-movie">
            <button className="svg-lupa"><Lupa /></button>
            <input type='text' placeholder="Procurar"/>
        </form>
    )
}

export default FilterMovie;