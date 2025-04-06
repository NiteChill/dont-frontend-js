import starEmpty from "../../assets/images/icons/starEmpty.svg";
import starHalf from "../../assets/images/icons/starHalf.svg";
import starFull from "../../assets/images/icons/starFull.svg";

export const Star = ({ value }) => {
  switch (value) {
    case 0:
      return <img src={starEmpty} alt="Empty star" width={16} />;
    case 0.5:
      return <img src={starHalf} alt="Half star" width={16} />;
    case 1:
      return <img src={starFull} alt="Full star" width={16} />;
  }
};
