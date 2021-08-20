import './styles.scss';
import{ReactComponent as StartImage } from '../../../../core/assets/images/star.svg';

const Show = () => {
    return(
        <div className=" show-container border-box">
            <div className="show-name-review">
            <div className="show-content">
               <StartImage  />
               <h4 className="show-name">Maria Silva</h4>
            </div>
            <div className="show-review">
                <p>
                  Gostei muito do filme. Foi muito bom mesmo. Pena que durou pouco.
                </p>
            </div>
        </div>
     </div>
    );
}

export default Show;