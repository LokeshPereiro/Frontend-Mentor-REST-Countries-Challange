import { SkeletonStyles } from "./SkeletonStyles";

export const Skeleton = () => {
  return (
    <SkeletonStyles>
      <div className="skeleton">
        <div className="image"></div>
        <div className="content">
          <span></span>
          <span></span>
        </div>
      </div>
    </SkeletonStyles>
  );
};
