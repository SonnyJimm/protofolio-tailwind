import { Props } from "interfaces";

const ChatWrapper: React.FC<Props> = ({ children }) => {
  return (
    <div className="flex w-100 h-[65%] rounded-lg overflow-y-auto bg-gray-800 flex-col">
      {children}
    </div>
  );
};
export default ChatWrapper;
