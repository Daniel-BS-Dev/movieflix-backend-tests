import ContentLoader from 'react-content-loader';

const MovieImageLoader = () => (
    <ContentLoader 
    speed={2}
    width={400}
    height={400}
    viewBox="0 0 400 460"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    
  >
    <rect x="0" y="60" rx="9" ry="9" width="500" height="315" />
  </ContentLoader>
)

export default MovieImageLoader;