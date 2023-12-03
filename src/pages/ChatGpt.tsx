import { CardWrapper, PageHeader, Paragraph } from "components";
import { PageProp } from "interfaces";

const ChatGptPage: React.FC<PageProp> = ({ activeIndex, index }) => {
  return (
    <CardWrapper activeIndex={activeIndex} index={index}>
      <PageHeader>ChatGpt plugin</PageHeader>
      <br />
      <Paragraph>
        This is plugin i made to talk and get more information from me i gave my
        background information to chatgpt and you can ask more things but also
        you can contact me directly through Contact Me page. This has some
        interesting aspect to it AWS Lambda web adabter and also chatgpt
        streaming option to make it usable or else the request takes 30 second
        to respond on average.
      </Paragraph>
      <br />
      <div className="flex w-100 h-80 rounded-lg overflow-y-auto bg-gray-800 flex-col">
        <div className="flex">
          <div className="p-2 bg-[#111010] w-max m-2 rounded-md max-w-[90%]">
            <Paragraph>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem
              unde voluptatem ab beatae obcaecati consequuntur voluptatibus ex
              fuga veritatis soluta. Et velit nostrum culpa commodi sapiente ad
              at, nam deleniti!
            </Paragraph>
          </div>
        </div>
        <div className="flex flex-row-reverse">
          <div className="p-2 bg-[#4d39a6] w-max m-2 rounded-md max-w-[90%]">
            <Paragraph>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem
              unde voluptatem ab beatae obcaecati consequuntur voluptatibus ex
              fuga veritatis soluta. Et velit nostrum culpa commodi sapiente ad
              at, nam deleniti!
            </Paragraph>
          </div>
        </div>
      </div>
    </CardWrapper>
  );
};
export default ChatGptPage;
