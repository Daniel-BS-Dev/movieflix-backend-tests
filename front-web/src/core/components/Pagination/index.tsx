import {ReactComponent as Seta} from '../../../core/assets/images/Seta-left.svg';
import { generateList } from '../../utils/list';
import './styles.scss';

type Props = {
    totalPages : number;
    isActive : number;
    onChange : (item: number) => void;
}

const Pagination = ({totalPages, isActive, onChange}: Props) => {
    const items = generateList(totalPages);

    return(
       <div className="pagination-container">
        <Seta  className="pagination-previous" /> 
        {items.map(item => (
           <div 
              key={item}
              className={`pagination-content ${item === isActive ? 'active' : ''}`}
              onClick = {() => onChange(item)}
           >
             {item + 1}
           </div>
        ))}
        <Seta  className="pagination-next" /> 
       </div>
    );
}

export default Pagination;