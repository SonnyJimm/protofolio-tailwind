import { Props } from "interfaces";

const PageHeaderSmall: React.FC<Props> = ({ children }) => {
  return <h1 className="font-bold text-base my-2">{children}</h1>;
};
export default PageHeaderSmall;
