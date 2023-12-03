import { CardWrapper } from "components";
import { PageProp } from "interfaces";

const ChatGptPage: React.FC<PageProp> = ({ activeIndex, index }) => {
  return (
    <CardWrapper activeIndex={activeIndex} index={index}>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni hic ducimus
      veniam? Incidunt rem totam quod corporis unde voluptas excepturi,
      laudantium et provident natus amet iusto autem! Laudantium, rerum dolorem.
    </CardWrapper>
  );
};
export default ChatGptPage;
