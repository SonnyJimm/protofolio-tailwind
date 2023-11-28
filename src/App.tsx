import {
  Container,
  NavBar,
  Content,
  NavBarElement,
  CardWrapper,
} from "components";
import { ActiveScreen } from "interfaces";
import { useState } from "react";

const App = () => {
  const [active] = useState<ActiveScreen>({
    currentIndex: 1,
    background: "sm:to-violet-900",
  });
  const [gradient, setGradient] = useState<String>("sm:to-violet-900");
  return (
    <Container gradient={gradient}>
      <Content>
        <CardWrapper>1d</CardWrapper>
        <CardWrapper>2d</CardWrapper>
        <CardWrapper>3d</CardWrapper>
        <CardWrapper>4d</CardWrapper>
      </Content>
      <NavBar>
        <NavBarElement
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
