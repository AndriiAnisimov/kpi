export default function ProgressBar({
  value,
  progressValue,
  progressColor
}: {
  value: number,
  progressValue: number,
  progressColor: string
}) {
  return (
    <div className="flex justify-center progress-wrapper">
      <svg
        className="circle-container"
        viewBox="2 -2 28 36" 
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle
          className="circle-container__background"
          r="16"
          cx="16"
          cy="16"
          shapeRendering="geometricPrecision"
        ></circle>
        <circle
          className="circle-container__progress"
          r="16"
          cx="16"
          cy="16"
          shapeRendering="geometricPrecision"
          strokeDashoffset={progressValue}
          stroke={progressColor}
        ></circle>
      </svg>
      <span className="progress-value">{value}</span>
    </div>
  );
}
