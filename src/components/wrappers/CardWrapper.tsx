import React from "react";
import { CardProp } from "interfaces";

const CardWrapper: React.FC<CardProp> = ({ children, activeIndex, index }) => {
  const classBuilder = () => {
    if (activeIndex === index) {
      return " sm:z-20";
    }
    if (activeIndex > index) {
      // card is left to the active
      return " sm:scale-90 sm:-translate-x-20 sm:z-10 sm:opacity-60";
    } else {
      //card is right to the active
      return " sm:scale-90 sm:translate-x-20 sm:z-10 sm:opacity-60";
    }
  };
  return (
    <div
      className={
        "sm:absolute sm:rounded-lg transition duration-500 all lg:right-10 lg:w-3/4 sm:w-3/4 sm:h-5/6 bg-[#111010]" +
        classBuilder()
      }
    >
      {children}
    </div>
  );
};
export default CardWrapper;
