import { Props } from "interfaces";

const ListItem: React.FC<Props> = ({ children }) => {
  return (
    <li className="mx-4 sm:max-8 text-sm leading-thight text-justify">{children}</li>
  );
};
export default ListItem;
