import { ReactComponent as Star } from "../../../assets/star.svg";
import { Reviews } from "../../../Types/type";
import "./styles.css";

type Props = {
  reviews: Reviews;
};

const Review = ({ reviews }: Props) => {
  return (
    <section className="container-review">
      <div className="review-name">
        <Star />
        <h5>{reviews.user.name}</h5>
      </div>
      <div className="review-comment">
        <p> {reviews.text} </p>
      </div>
    </section>
  );
};

export default Review;
