import Skeleton, { SkeletonTheme } from "react-loading-skeleton";


const Skeletons = () => {
    return (
        <SkeletonTheme baseColor="#202020" highlightColor="#444">
    <p>
        {"jello" || 
      <Skeleton count={3} />}
      
    </p>
  </SkeletonTheme>
    );
};

export default Skeletons;