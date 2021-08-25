import ContentLoader from "react-content-loader"

const MovieInfoLoader = () => (

  <ContentLoader 
    speed={2}
    width={400}
    height={400}
    viewBox="0 0 400 150"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    
  >
    <rect x="25" y="15" rx="5" ry="5" width="500" height="25" /> 
    <rect x="25" y="45" rx="5" ry="5" width="200" height="25" /> 
    <rect x="25" y="75" rx="5" ry="5" width="600" height="25" />
  </ContentLoader>
)

export default  MovieInfoLoader;