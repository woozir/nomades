import React, { FunctionComponent } from "react";

type StepperProps = {
  index: number;
  maxIndex: number;
  previous: () => void;
  next: () => void;
};

const Stepper: FunctionComponent<StepperProps> = ({ index, previous, next, maxIndex }) => {
  return (
    <div className="flex row justify-around my-2">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        className={index === 0 ? " text-gray-900 h-16" : " text-white h-16"}
        onClick={previous}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M11 15l-3-3m0 0l3-3m-3 3h8M3 12a9 9 0 1118 0 9 9 0 01-18 0z"
        />
      </svg>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        className={index === maxIndex - 1 ? " text-gray-900 h-16" : " text-white h-16"}
        onClick={next}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    </div>
  );
};

export default Stepper;
