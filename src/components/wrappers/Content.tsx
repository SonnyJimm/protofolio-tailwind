import { Props } from "interfaces";

const Content: React.FC<Props> = ({ children }) => {
  return (
    <div className="basis-[95%] lg:basis-3/5 flex sm:flex-row-reverse sm:items-center">
      {children}
    </div>
  );
};
export default Content;
