import { Props } from "interfaces";

const Content: React.FC<Props> = ({ children }) => {
  return <div className="basis-[95%] lg:basis-3/5 ">{children}</div>;
};
export default Content;
