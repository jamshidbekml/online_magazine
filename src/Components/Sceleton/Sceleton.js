import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import "./Sceleton.scss";

const RenderSceleton = () => {
  return (
    <SkeletonTheme baseColor="#e5e5e5" highlightColor="#d5d5d5">
      <div className="card">
        <p className="card-img">
          <Skeleton style={{ height: "160px" }} />
        </p>
        <h3 className="card-title">
          <Skeleton />
        </h3>
        <p className="card-price">
          <Skeleton />
        </p>
        <div className="card-credit">
          <p className="card-price">
            <Skeleton width={90} style={{ marginRight: "10px" }} />
          </p>
          <p className="card-price">
            <Skeleton width={20} />
          </p>
        </div>
      </div>
    </SkeletonTheme>
  );
};

export default RenderSceleton;
