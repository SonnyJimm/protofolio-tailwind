import { Props } from "interfaces";

const Content: React.FC<Props> = ({ children }) => {
  return (
    <div className="basis-[95%] lg:basis-4/5 flex flex-col relative lg:flex-row-reverse sm:items-center justify-center box-content">
      {children}
    </div>
  );
};
export default Content;
