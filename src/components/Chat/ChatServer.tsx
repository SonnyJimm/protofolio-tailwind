import Paragraph from "components/wrappers/Paragraph";
import { Props } from "interfaces";

const ChatServer: React.FC<Props> = ({ children }) => {
  return (
    <div className="flex">
      <div className="p-2 bg-[#111010] w-max m-2 rounded-md max-w-[90%]">
        <Paragraph>{children}</Paragraph>
      </div>
    </div>
  );
};
export default ChatServer;
