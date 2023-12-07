import { Props } from "interfaces";

const ChatWrapper: React.FC<Props> = ({ children }) => {
  return (
    <div id="chats" className="flex w-100 h-[500px] lg:h-[60%] min-h-[400px]  rounded-lg overflow-y-auto bg-gray-800 flex-col">
      {children}
    </div>
  );
};
export default ChatWrapper;
