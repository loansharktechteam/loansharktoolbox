import React from "react";

type Props = {
  color?: string;
};

const ArrowUp = (props: Props) => {
  const { color } = props;
  return (
    <svg
      width="16"
      height="17"
      viewBox="0 0 16 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4.19533 7.75267C4.32035 7.87765 4.48989 7.94786 4.66667 7.94786C4.84344 7.94786 5.01298 7.87765 5.138 7.75267L7.33333 5.558L7.338 12.5C7.338 12.6768 7.40824 12.8464 7.53326 12.9714C7.65829 13.0964 7.82786 13.1667 8.00467 13.1667C8.18148 13.1667 8.35105 13.0964 8.47607 12.9714C8.6011 12.8464 8.67133 12.6768 8.67133 12.5L8.66667 5.55733L10.862 7.75267C10.9235 7.81634 10.9971 7.86713 11.0784 7.90207C11.1597 7.93701 11.2472 7.9554 11.3357 7.95617C11.4243 7.95694 11.512 7.94007 11.594 7.90655C11.6759 7.87303 11.7503 7.82352 11.8129 7.76093C11.8755 7.69833 11.925 7.6239 11.9585 7.54197C11.9921 7.46004 12.0089 7.37225 12.0082 7.28373C12.0074 7.19521 11.989 7.10773 11.9541 7.0264C11.9191 6.94506 11.8683 6.8715 11.8047 6.81L9.41467 4.41933C9.22895 4.23358 9.00845 4.08623 8.76578 3.9857C8.52311 3.88517 8.26301 3.83343 8.00033 3.83343C7.73766 3.83343 7.47756 3.88517 7.23489 3.9857C6.99222 4.08623 6.77172 4.23358 6.586 4.41933L4.19533 6.81C4.07035 6.93502 4.00014 7.10456 4.00014 7.28133C4.00014 7.45811 4.07035 7.62765 4.19533 7.75267Z"
        fill={color || "#0B0D17"}
      />
    </svg>
  );
};

export default ArrowUp;
