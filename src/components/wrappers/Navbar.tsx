import { Props } from "interfaces";

const NavBar: React.FC<Props> = ({ children }) => {
  return (
    <div className="basis-[10%] flex flex-row items-center lg:items-start lg:basis-2/5 gap-2 md:gap-5 lg:flex-col justify-center lg:ml-20">
      {children}
    </div>
  );
};

export default NavBar;
