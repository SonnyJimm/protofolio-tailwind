import React from "react";
import { ContainerProp } from "interfaces";
const Container: React.FC<ContainerProp> = ({ children, gradient }) => {
  return (
    <div
      className={
        "h-screen w-screen flex flex-col-reverse font-sans transition-all duration-500 text-white lg:flex-row  bg-black lg:bg-gradient-to-r sm:bg-gradient-to-t sm:from-black sm:from-60% text-gray-300 " +
        gradient
      }
    >
      {children}
    </div>
  );
};
export default Container;
