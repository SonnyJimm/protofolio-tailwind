import { Props } from "interfaces";

const PageHeader: React.FC<Props> = ({ children }) => {
  return <h1 className=" font-bold text-4xl">{children}</h1>;
};
export default PageHeader;
