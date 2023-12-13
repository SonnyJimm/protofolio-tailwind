import { FormInputProps } from "interfaces"

const InputComponent: React.FC<FormInputProps> =({name,value,placeHolder,onChange,error})=>{
    const onChangeField = (e: React.FormEvent<HTMLInputElement>) =>{
        onChange(e.currentTarget.value);
    }
    return <>
        <label>{name}</label>
        <input
          className="bg-gray-800 rounded-md p-2 w-full lg:w-1/2 focus:shadow-3xl"
          placeholder={placeHolder}
          value={value}
          onChange={onChangeField}
        />
        <div className={"transition-all duration-500 overflow-hidden " + (error.length === 0 ? "h-0" : " h-5")}>
            <span className=" text-red-500 text-sm w-full lg:w-fit">
                {error}
            </span>
        </div>
    </>
}
export default InputComponent