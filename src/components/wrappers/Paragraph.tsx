import { Props } from "interfaces";

const Paragraph: React.FC<Props> = ({ children }) => {
  return <p className="text-sm leading-thight text-justify">{children}</p>;
};
export default Paragraph;
