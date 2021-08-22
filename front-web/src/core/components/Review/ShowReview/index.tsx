import './styles.scss';
import{ReactComponent as StartImage } from '../../../../core/assets/images/star.svg';
//import { User } from '../../../types/Movie';

//type Props = {
//    user: User;

//}

const Show = () => {

    //const [movieResponse, setMovieResponse] = useState<MoviesResponse>();

    return(
        <div className=" show-container border-box">
            <div className="show-name-review">
            <div className="show-content">
               <StartImage  />
               <h4 className="show-name">kjhgfghjkl</h4>
            </div>
            <div className="show-review">
                <p>
                  lkjhgfghj
                </p>
            </div>
        </div>
     </div>
    );
}

export default Show;