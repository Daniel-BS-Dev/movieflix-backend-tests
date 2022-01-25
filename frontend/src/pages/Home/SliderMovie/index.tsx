import Carousel from "react-elastic-carousel";
import { ReactComponent as Arrow } from "../../../assets/arrow.svg";
import Item from "../../../utils/Item";
import "./styles.css";

const SliderMovie = () => {
  const product = {
    id: 11,
    title: "Amor e Monstros",
    subTitle: "An apocalyptic love story.",
    year: 2020,
    imgUri:
      "https://www.themoviedb.org/t/p/original/sLSYI1B9IWo7MO8Q60v9JlOXyXn.jpg",
  };

  const handleLeft = () => {
     console.log('clicou')
  }

  const handleRight = () => {
    console.log('clicou')
 }

  return (
    <Carousel isRTL enableAutoPlay autoPlaySpeed={5000} className="carousel">
      <Item>
        <div className="div-image">
        <div> <Arrow  onClick={handleLeft} className="arrow" /> <Arrow  onClick={handleRight} className="arrow-lef arrow"/></div>
          <img className="image" src={product.imgUri} />
        </div>
        <div className="slider-info">
          <h1>{product.title}</h1>
          <p>{product.subTitle}</p>
        </div>
      </Item>
     
    </Carousel>
  );
};

export default SliderMovie;
