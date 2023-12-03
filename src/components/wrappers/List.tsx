import { Props } from "interfaces";

const List: React.FC<Props> = ({ children }) => {
  return <ul className=" list-inside list-disc text-justify my-4">{children}</ul>;
};

export default List;
