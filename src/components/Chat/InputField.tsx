import { useState } from "react";

const InputField: React.FC = () => {
  const [input, setInput] = useState<string>("");
  const onChange = (e: React.FormEvent<HTMLTextAreaElement>) => {
    setInput(e.currentTarget.value);
  };

  return (
    <div className="flex flex-row my-2 gap-2 h-12 mx-1">
      <div className="flex w-full">
        <textarea
          className="h-12 w-full text-sm leading-thight focus:shadow-3xl bg-gray-800 rounded-md p-2"
          value={input}
          onChange={onChange}
        />
      </div>
      <div className="flex flex-row-reverse">
        <button className=" h-16 w-16 rounded-md align-middle text-center bg-[#4d39a6] disabled:opacity-50 active:opacity-50 disabled:cursor-not-allowed">
          Send
        </button>
      </div>
    </div>
  );
};
export default InputField;
