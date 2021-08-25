import ContentLoader from "react-content-loader"
import { generateList } from "../../../utils/list";

const MovieCardLoader = () => {
   const laoderItems = generateList(8);

    return(
        <>
        {laoderItems.map(items =>(
            <ContentLoader
            key={items} 
            speed={1}
            width={250}
            height={320}
            viewBox="0 0 250 320"
            backgroundColor="#ecebeb"
            foregroundColor="#d6d2d2"
            
          >
            <rect x="0" y="60" rx="5" ry="5" width="250" height="320" />
          </ContentLoader>
        ))}
        </>
    )
}

export default MovieCardLoader;
