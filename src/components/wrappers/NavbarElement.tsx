import { NavBarElementProp } from "interfaces";
const NavBarElement: React.FC<NavBarElementProp> = ({
  children,
  setBackground,
  setDefaultBackground,
}) => {
  return (
    <span
      className="hover:scale-110 duration-100 cursor-pointer lg:text-lg font-bold sm:text-base text-xs"
      onMouseEnter={() => setBackground()}
      onMouseLeave={() => setDefaultBackground()}
    >
      {children}
    </span>
  );
};
export default NavBarElement;
