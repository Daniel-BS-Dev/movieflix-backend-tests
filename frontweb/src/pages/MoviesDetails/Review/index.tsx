import {ReactComponent as Star} from '../../../assets/star.svg';
import './styles.css'

const Review = () => {
    return(
      <section className='container-review'>
        <div className='review-name'>
          <Star />
          <h5>Maria Silva</h5>
        </div>
        <div className='review-comment'>
          <p>
            gostei muito do filme foi muito bom mesmo pena que durou pouco
          </p>
        </div>
      </section>
    );
}

export default Review;