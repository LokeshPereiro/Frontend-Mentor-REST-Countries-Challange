import { SkeletonStyles } from "./SkeletonStyles";

export const SingleSkeleton = () => {
  return (
    <SkeletonStyles>
      <div className="container select">
        <div className="image"></div>
        <div className="details">
          <span></span>
          <div className="data">
            <div className="data-right">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </div>
            <div className="data-left">
              <span></span>
              <span></span>
            </div>
          </div>
          <div className="borders">
            <span></span>
          </div>
        </div>
      </div>
    </SkeletonStyles>
  );
};
