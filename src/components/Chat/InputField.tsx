import { InputProp } from "interfaces";
import { useState } from "react";

const InputField: React.FC<InputProp> = ({ sendPrompt }) => {
  const [input, setInput] = useState<string>("");
  const [isLoading, setLoading] = useState<boolean>(false);
  const onChange = (e: React.FormEvent<HTMLTextAreaElement>) => {
    setInput(e.currentTarget.value);
  };
  const onSubmit = () => {
    if (input.length === 0) {
      return;
    }
    setLoading(true);
    sendPrompt(input, () => {
      setLoading(false);
    });
    setInput("");
  };
  return (
    <div className="flex flex-row my-2 gap-2 h-12 mx-1">
      <div className="flex w-full">
        <textarea
          className="h-12 w-full text-sm leading-thight focus:shadow-3xl bg-gray-800 rounded-md p-2"
          value={input}
          onChange={onChange}
          disabled={isLoading}
        />
      </div>
      <div className="flex flex-row-reverse">
        <button
          className=" h-16 w-16 rounded-md align-middle text-center bg-[#4d39a6] disabled:opacity-50 active:opacity-50 disabled:cursor-not-allowed"
          onClick={onSubmit}
          disabled={isLoading}
        >
          {isLoading ? "Loading" : "Send"}
        </button>
      </div>
    </div>
  );
};
export default InputField;
