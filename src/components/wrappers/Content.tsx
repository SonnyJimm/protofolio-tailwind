import { Props } from "interfaces";

const Content: React.FC<Props> = ({ children }) => {
  return (
    <div className="basis-[90%] lg:basis-4/5 flex flex-col sm:relative lg:flex-row-reverse sm:items-center sm:justify-center box-content overflow-y-auto">
      {children}
    </div>
  );
};
export default Content;
