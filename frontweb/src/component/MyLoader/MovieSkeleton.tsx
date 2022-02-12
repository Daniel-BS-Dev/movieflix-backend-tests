import ContentLoader from "react-content-loader"

const MovieSkeleton = () => (
  <ContentLoader 
    speed={2}
    width={170}
    height={250}
    viewBox="0 0 170 250"
    backgroundColor="#bcbcbc"
    foregroundColor="#ffffff"
    
  >
    <rect x="0" y="0" rx="10" ry="10" width="170" height="250" />
  </ContentLoader>
)

export default MovieSkeleton;