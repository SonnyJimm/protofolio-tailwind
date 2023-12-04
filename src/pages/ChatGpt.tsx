import {
  CardWrapper,
  ChatClient,
  ChatServer,
  ChatWrapper,
  PageHeader,
  Paragraph,
} from "components";
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
      <ChatWrapper>
        <ChatServer>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem unde
          voluptatem ab beatae obcaecati consequuntur voluptatibus ex fuga
          veritatis soluta. Et velit nostrum culpa commodi sapiente ad at, nam
          deleniti!
        </ChatServer>
        <ChatClient>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem unde
          voluptatem ab beatae obcaecati consequuntur voluptatibus ex fuga
          veritatis soluta. Et velit nostrum culpa commodi sapiente ad at, nam
          deleniti!
        </ChatClient>
      </ChatWrapper>
      <div className="flex flex-row my-2 gap-2 h-12 mx-1">
        <div className="flex w-full ">
          <textarea className="h-12 w-full text-sm leading-thight focus:shadow-3xl bg-gray-800 rounded-md p-2" />
        </div>
        <div className="flex flex-row-reverse">
          <button className=" h-16 w-16 rounded-md align-middle text-center bg-[#4d39a6] disabled:opacity-50 active:opacity-50 disabled:cursor-not-allowed">
            Send
          </button>
        </div>
      </div>
    </CardWrapper>
  );
};
export default ChatGptPage;
