import { ReactComponent as Arrow } from "../../../assets/arrow.svg";
import { Movie } from "../../../Types/type";
import "./styles.css";

type Props = {
  movies: Movie[];

};

const SliderMovie = ({ movies }: Props) => {

  return (
    <section className="container-slider">
        <div className="content-slider">
        {movies?.map((r) => (
          <img src={r.imgUri} key={r.id} />
        ))}

        {movies?.map((r) => (
          <div className="slider-info" key={r.id}>
            <h5>{r.title}</h5>
            <p>{r.subTitle}</p>
          </div>
        ))}

        <div className="div-button">
     
        </div>
      </div>
    </section>
  );
};

export default SliderMovie;
