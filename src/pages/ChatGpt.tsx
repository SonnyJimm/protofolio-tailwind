import {
  CardWrapper,
  ChatClient,
  ChatServer,
  ChatWrapper,
  PageHeader,
  Paragraph,
  InputField,
} from "components";
import { Conversation, PageProp } from "interfaces";
import { useState } from "react";

const ChatGptPage: React.FC<PageProp> = ({ activeIndex, index }) => {
  const [conversations, setConversation] = useState<Conversation[]>([
    {
      role: "server",
      message: "Hello how can i help you",
    },
  ]);
  const sendPrompt = async (prompt: string, callback: Function) => {
    conversations.push({ role: "user", message: prompt });
    setConversation([...conversations]);
    const el = document.getElementById("chats");
    try {
      const response = await fetch(
        // you function url here
        "https://rlp46ba7j2dphigklcbwbtrtse0dvzpq.lambda-url.us-east-1.on.aws/",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            message: prompt,
          }),
        }
      );
      const reader = response.body?.getReader();
      if (!reader) {
        throw new Error("body not readable");  
      }
      const decoder = new TextDecoder();
      // Process the chunks from the stream
      const prompts = { role: "server", message: "" };
      conversations.push(prompts);
      while (true) {
        const { done, value } = await reader.read();
        if (done) {
          break;
        }
        const text = decoder.decode(value);
        prompts.message += text;
        setConversation([...conversations]);
        el?.scrollTo(0, el.scrollHeight);
      }
    } catch (e) {
      console.log(e);
    } finally {
      callback();
    }
  };
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
        {conversations.map((conversation, id) => {
          return conversation.role === "server" ? (
            <ChatServer key={id}>{conversation.message}</ChatServer>
          ) : (
            <ChatClient key={id}>{conversation.message}</ChatClient>
          );
        })}
      </ChatWrapper>
      <InputField sendPrompt={sendPrompt} />
    </CardWrapper>
  );
};
export default ChatGptPage;
