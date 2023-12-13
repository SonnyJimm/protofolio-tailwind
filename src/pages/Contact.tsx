import { CardWrapper, InputComponent, PageHeader, Paragraph } from "components";
import { PageProp } from "interfaces";
import { useState } from "react";

const ContactPage: React.FC<PageProp> = ({ activeIndex, index }) => {
  const [email, setEmail] = useState<string>("");
  const [emailError, setEmailError] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [nameError, setNameError] = useState<string>("");
  const [subject, setSubject] = useState<string>("");
  const [subjectError, setSubjectError] = useState<string>("");
  const onSubmit = (e: React.FormEvent<HTMLFormElement>)=>{
    e.preventDefault();
    setEmailError("error on email");
    setNameError("error on name");
    setSubjectError("error on subject");
  }
  return (
    <CardWrapper activeIndex={activeIndex} index={index}>
      <PageHeader>Contacts</PageHeader>
      <br />
      <Paragraph>Place holder</Paragraph>
      <br />
      <form className="flex flex-col gap-2 transition-all duration-300" onSubmit={onSubmit}>
        <InputComponent name={"Email"} value={email} onChange={setEmail} error={emailError} placeHolder="example@example.com"/>
        <InputComponent name={"Name"} value={name} onChange={setName} error={nameError} placeHolder="John Doe"/>
        <InputComponent name={"Subject"} value={subject} onChange={setSubject} error={subjectError} placeHolder="example@example.com"/>
        <label>Message</label>
        <textarea
          className="h-32 w-full lg:w-3/4 bg-gray-800 rounded-md p-2 text-sm leading-thight focus:shadow-3xl"
          placeholder="Message"
        />
        <br/>
        <button className="h-8 w-full lg:w-3/4 rounded-md align-middle text-center bg-[#4d39a6] disabled:opacity-50 active:opacity-50 disabled:cursor-not-allowed">Submit</button>
      </form>
    </CardWrapper>
  );
};
export default ContactPage;
