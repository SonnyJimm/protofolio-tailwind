import { Props } from "interfaces";

const SkillCardWrapper: React.FC<Props> = ({ children }) => {
  return <div className="flex gap-1 flex-wrap">{children}</div>;
};
export default SkillCardWrapper;
