import { CircularProgressbar } from "react-circular-progressbar";

interface IProgressbar {
  children: JSX.Element | JSX.Element[];
  value: number;
}

const ProgressBar = ({ children, value }: IProgressbar) => {
  const gradientTransform = `rotate(90)`;
  return (
    <div>
      <svg style={{ height: 0, width: 0 }}>
        <defs>
          <linearGradient id={"progress"} gradientTransform={gradientTransform}>
            <stop offset="0%" stopColor={"#ED7868"} />
            <stop offset="100%" stopColor={"#FFB077"} />
          </linearGradient>
        </defs>
      </svg>
      <div className="flex-center relative h-[14rem] w-[14rem]">
        <CircularProgressbar
          value={value}
          strokeWidth={8}
          styles={{
            path: {
              stroke: `url(#${"progress"})`,
              height: "100%",
              strokeLinecap: "round",
              transition: "stroke-dashoffset 1s linear 0s",
            },
            trail: {
              stroke: "white",
            },
          }}
        />

        {children}
      </div>
    </div>
  );
};

export default ProgressBar;
