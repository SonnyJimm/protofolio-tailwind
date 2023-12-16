import React from "react";

import MuiAlert, { AlertProps } from "@mui/material/Alert";
import Snackbar from "@mui/material/Snackbar";

import { CardWrapper, InputComponent, PageHeader, Paragraph } from "components";
import { PageProp } from "interfaces";
import { useState } from "react";

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
  props,
  ref
) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});
const ContactPage: React.FC<PageProp> = ({ activeIndex, index }) => {
  const [email, setEmail] = useState<string>("");
  const [emailError, setEmailError] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [nameError, setNameError] = useState<string>("");
  const [subject, setSubject] = useState<string>("");
  const [subjectError, setSubjectError] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [isLoading, setLoading] = useState<boolean>(false);
  const [resState, setState] = useState<string>("success");
  const [open, setOpen] = useState(false);

  const handleClose = (
    event?: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    let error = false;
    if (
      !email.match(
        /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      )
    ) {
      setEmailError("Email does not match format");
      error = true;
    }
    if (name.length <= 3) {
      setNameError("Name must be atleast length of 3");
      error = true;
    }
    if (subject.length <= 3) {
      setSubjectError("Subject must be atleast length of 3");
      error = true;
    }
    if (error) {
      setLoading(false);
      return;
    }
    try {
      await fetch(
        "https://9htulh0fpg.execute-api.us-east-1.amazonaws.com/api/contact",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: email,
            name: name,
            subject: subject,
            content: message,
          }),
        }
      );
      setEmail("");
      setName("");
      setSubject("");
      setMessage("");
      setState("success");
    } catch (e) {
      console.log(e);
      setState("error");
    } finally {
      setOpen(true);
      setEmailError("");
      setNameError("");
      setSubjectError("");
      setLoading(false);
    }
  };
  return (
    <CardWrapper activeIndex={activeIndex} index={index}>
      <PageHeader>Contact</PageHeader>
      <br />
      <Paragraph>You can download my resume by clicking <a className="underline" href="/resume/Zorigt_Tserenpuntsag_Resume.pdf">here.</a></Paragraph>
      <br />
      <form
        className="flex flex-col gap-2 transition-all duration-300"
        onSubmit={onSubmit}
      >
        <InputComponent
          name={"Email"}
          value={email}
          onChange={setEmail}
          error={emailError}
          placeHolder="example@example.com"
        />
        <InputComponent
          name={"Name"}
          value={name}
          onChange={setName}
          error={nameError}
          placeHolder="John Doe"
        />
        <InputComponent
          name={"Subject"}
          value={subject}
          onChange={setSubject}
          error={subjectError}
          placeHolder="Subject"
        />
        <label>Message</label>
        <textarea
          className="h-32 w-full lg:w-3/4 bg-gray-800 rounded-md p-2 text-sm leading-thight focus:shadow-3xl"
          placeholder="Message"
          value={message}
          onChange={(e: React.FormEvent<HTMLTextAreaElement>) => {
            setMessage(e.currentTarget.value);
          }}
        />
        <br />
        <button
          className="h-8 w-full lg:w-3/4 rounded-md align-middle text-center bg-[#4d39a6] disabled:opacity-50 active:opacity-50 disabled:cursor-not-allowed"
          disabled={isLoading}
        >
          {isLoading ? "Loading" : "Submit"}
        </button>
      </form>
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        {resState === "success" ? (
          <Alert
            onClose={handleClose}
            severity="success"
            sx={{ width: "100%" }}
          >
            Succesfully sent the email
          </Alert>
        ) : (
          <Alert
            onClose={handleClose}
            severity="error"
            sx={{ width: "100%" }}
          >
            Failed to notify but you can contact me through at the email on
            resume
          </Alert>
        )}
      </Snackbar>
    </CardWrapper>
  );
};
export default ContactPage;
