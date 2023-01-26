import { ISvg } from "allTypes/svg";

const ArrowSvg = ({ className, strokeWidth }: ISvg) => {
  return (
    <svg
      width="30"
      height="30"
      viewBox="0 0 30 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M18.75 5L8.75 15L18.75 25"
        stroke="currentColor"
        strokeWidth={strokeWidth ? strokeWidth + "" : "2"}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default ArrowSvg;
