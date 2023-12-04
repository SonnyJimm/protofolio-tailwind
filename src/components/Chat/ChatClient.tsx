import Paragraph from "components/wrappers/Paragraph";
import { Props } from "interfaces";

const ChatClient: React.FC<Props> = ({ children }) => {
  return (
    <div className="flex flex-row-reverse">
      <div className="p-2 bg-[#4d39a6] w-max m-2 rounded-md max-w-[90%]">
        <Paragraph>{children}</Paragraph>
      </div>
    </div>
  );
};
export default ChatClient;
