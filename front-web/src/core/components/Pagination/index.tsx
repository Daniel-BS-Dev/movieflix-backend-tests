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
    const previousClass = totalPages > 0 && isActive > 0 ? 'active' : 'inactive';
    const nextClass = (isActive + 1) < totalPages ? 'active' : 'inactive';

    return(
       <div className="pagination-container">
        <Seta  
           className={`pagination-previous ${previousClass}`} 
           onClick = {() => onChange(isActive - 1)}
         /> 
        {items.map(item => (
           <div 
              key={item}
              className={`pagination-content ${item === isActive ? 'active' : ''}`}
              onClick = {() => onChange(item)}
           >
             {item + 1}
           </div>
        ))}
        <Seta  
           className= {`pagination-next ${nextClass}`} 
           onClick = {() => onChange(isActive + 1)}
        /> 
       </div>
    );
}

export default Pagination;