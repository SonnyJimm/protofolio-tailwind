import { Container, NavBar, Content, NavBarElement } from "components";
import { ActiveScreen } from "interfaces";
import ChatGptPage from "pages/ChatGpt";
import ContactPage from "pages/Contact";
import IntroPage from "pages/Intro";
import WorkExperiencePage from "pages/WorkExp";
import { useState } from "react";
const App = () => {
  const [active, setActive] = useState<ActiveScreen>({
    currentIndex: 1,
    background: "sm:to-violet-900",
  });
  const setActiveIndex = (index: Number) => {
    setActive({ currentIndex: index, background: gradient });
  };
  const [gradient, setGradient] = useState<String>("sm:to-violet-900");
  return (
    <Container gradient={gradient}>
      <Content>
        <IntroPage activeIndex={active.currentIndex} index={1} />
        <WorkExperiencePage activeIndex={active.currentIndex} index={2} />
        <ChatGptPage activeIndex={active.currentIndex} index={3} />
        <ContactPage activeIndex={active.currentIndex} index={4} />
      </Content>
      <NavBar>
        <NavBarElement
          index={1}
          onClickSetActiveIndex={setActiveIndex}
          setBackground={() => {
            setGradient("sm:to-violet-800");
          }}
          setDefaultBackground={() => {
            setGradient(active.background);
          }}
        >
          Introduction
        </NavBarElement>
        <NavBarElement
          index={2}
          onClickSetActiveIndex={setActiveIndex}
          setBackground={() => {
            setGradient("sm:to-indigo-800");
          }}
          setDefaultBackground={() => {
            setGradient(active.background);
          }}
        >
          Work Experience
        </NavBarElement>
        <NavBarElement
          index={3}
          onClickSetActiveIndex={setActiveIndex}
          setBackground={() => {
            setGradient("sm:to-orange-900");
          }}
          setDefaultBackground={() => {
            setGradient(active.background);
          }}
        >
          Chat With AI
        </NavBarElement>
        <NavBarElement
          index={4}
          onClickSetActiveIndex={setActiveIndex}
          setBackground={() => {
            setGradient("sm:to-rose-900");
          }}
          setDefaultBackground={() => {
            setGradient(active.background);
          }}
        >
          Contact me
        </NavBarElement>
      </NavBar>
    </Container>
  );
};

export default App;
