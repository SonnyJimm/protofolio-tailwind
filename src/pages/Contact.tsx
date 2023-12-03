import { CardWrapper } from "components";
import { PageProp } from "interfaces";

const ContactPage: React.FC<PageProp> = ({ activeIndex, index }) => {
  return (
    <CardWrapper activeIndex={activeIndex} index={index}>
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo quis
      laboriosam soluta nostrum officiis, vel voluptatem dolorum culpa
      accusamus, modi animi cum deleniti, id nisi? Aperiam at et est veritatis.
    </CardWrapper>
  );
};
export default ContactPage;
