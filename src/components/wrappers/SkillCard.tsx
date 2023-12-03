import { Props } from "interfaces";

const SkillCard: React.FC<Props> = ({ children }) => {
  return (
    <div className="text-sm leading-thight bg-gray-600 w-max px-2 rounded-md">
      {children}
    </div>
  );
};
export default SkillCard;
