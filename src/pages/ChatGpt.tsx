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
  const sendPrompt = (prompt: string) => {
    setConversation([...conversations, { role: "user", message: prompt }]);
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
