import { CardWrapper } from "components";
import { PageProp } from "interfaces";

const WorkExperiencePage: React.FC<PageProp> = ({ activeIndex, index }) => {
  return (
    <CardWrapper activeIndex={activeIndex} index={index}>
      helllo
    </CardWrapper>
  );
};

export default WorkExperiencePage;
