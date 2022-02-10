import { ReactComponent as Arrow } from "../../assets/arrow.svg";
import "./styles.css";

const Pagination = () => {
  return (
    <section className="container-pagination">
      <div className="pagination-arrow-right">
        <Arrow />
      </div>
      <div className="container-button">
        <button className="active-button">1</button>
        <button>1</button>
        <button>1</button>
        <button>...</button>
        <button>10</button>
      </div>
      <div className="pagination-arrow-left">
        <Arrow className="active-arrow"/>
      </div>
    </section>
  );
};

export default Pagination;
