import { ReactComponent as Arrow } from "../../assets/arrow.svg";
import { generatedList } from "../../utils/list";
import "./styles.css";

type Props = {
  totalPages: number;
  pageIsActive: number;
  onChange: (item: number) => void;
  
}

const Pagination = ({ totalPages, pageIsActive, onChange } : Props) => {
  const items = generatedList(totalPages);
  const previousArrow = totalPages > 0 && pageIsActive > 0 ? 'active-arrow' : 'inactive-arrow';
  const nextArrow = pageIsActive + 1 < totalPages ? 'active-arrow' : 'inactive-arrow';

  return (
    <section className="container-pagination">
      <div 
      onClick={() => onChange(pageIsActive - 1)}
      className={`pagination-arrow-right ${previousArrow}`}
      >
        <Arrow />
      </div>
      <div className="container-button">

        {items.map((item) => (
          <button key={item}
          className={`${
            item === pageIsActive ? 'active-button' : ''
          }`}
          onClick={() => onChange(item)}
          >
            {item + 1}
          </button>
        ))}
        
      </div>
      <div
         onClick={() => onChange(pageIsActive + 1)}
         className={`pagination-arrow-left ${nextArrow}`}
      >
        <Arrow/>
      </div>
    </section>
  );
};

export default Pagination;
