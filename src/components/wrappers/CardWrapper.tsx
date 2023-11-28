import React from "react";
import { Props } from "interfaces";

const CardWrapper: React.FC<Props> = ({ children }) => {
  return (
    <div className="sm:absolute rounded-lg lg:right-10 lg:w-3/4 sm:w-3/4 sm:h-5/6 bg-white">
      {children}
    </div>
  );
};
export default CardWrapper;
