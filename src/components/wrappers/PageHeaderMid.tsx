import { Props } from "interfaces";

const PageHeaderMid: React.FC<Props> = ({ children }) => {
  return <h1 className="font-bold text-xl my-2">{children}</h1>;
};
export default PageHeaderMid;
