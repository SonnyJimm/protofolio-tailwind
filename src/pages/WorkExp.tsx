import { CardWrapper } from "components";
import { PageProp } from "interfaces";

const WorkExperience: React.FC<PageProp> = ({ activeIndex, index }) => {
  return (
    <CardWrapper activeIndex={activeIndex} index={index}>
      helllo
    </CardWrapper>
  );
};

export default WorkExperience;
