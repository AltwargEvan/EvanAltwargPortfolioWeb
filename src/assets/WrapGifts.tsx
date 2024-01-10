import React, { SVGProps } from "react";

const WrapGiftsLogo = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="32"
      height="32"
      fill="none"
      viewBox="0 0 42 42"
      {...props}
    >
      <path fill="#8DACFB" d="M2 17.638h36v2H2z"></path>
      <rect width="36" height="24" x="2" y="18" fill="#8DACFB" rx="2"></rect>
      <path fill="#CD5959" d="M15 18h10v24H15z"></path>
      <rect width="41" height="12" y="6.362" fill="#B5C9FF" rx="1"></rect>
      <path
        fill="#EE4545"
        d="M34.5 2.362c0 1.38-2.007 3.898-2.769 4-3.731.5.269-2.12.269-3.5S30.903 0 31.731 0 34.5.981 34.5 2.362Z"
      ></path>
      <path
        fill="#EE4545"
        d="M32.5.362c3.357 2.869 0 3.5-.5 2-.553-1.66-8 3.5-8 2 0-.829 3.225-2.863 4.5-3.5 1-.5 4-1.329 4-.5ZM32.277 4.67C33.5 3.862 33 5.862 31 6.362c-2.485 0-6 .276-6 0-.5-1 2.791-1.192 5.277-1.192 2-.67.723-.308 2-.5ZM5 2.362c0 1.38 2.007 3.898 2.769 4 3.73.5-.269-2.12-.269-3.5S8.597 0 7.769 0C6.94 0 5 .981 5 2.362Z"
      ></path>
      <path
        fill="#EE4545"
        d="M7 .362c-3.357 2.869 0 3.5.5 2 .553-1.66 8 3.5 8 2 0-.829-3.225-2.863-4.5-3.5-1-.5-4-1.329-4-.5ZM7.223 4.67C6 3.862 6.5 5.862 8.5 6.362c2.485 0 6 .276 6 0 .5-1-2.791-1.192-5.277-1.192-2-.67-.723-.308-2-.5Z"
      ></path>
      <path
        fill="#EE4545"
        d="M26 6.376H14c0-2.217 2.686-4.014 6-4.014s6 1.797 6 4.014Z"
      ></path>
      <path fill="#F58181" d="M14 6.362h12v12H14z"></path>
    </svg>
  );
};

export default WrapGiftsLogo;
