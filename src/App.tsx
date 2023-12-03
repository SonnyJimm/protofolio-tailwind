import {
  Container,
  NavBar,
  Content,
  NavBarElement,
  CardWrapper,
} from "components";
import { ActiveScreen } from "interfaces";
import IntroPage from "pages/Intro";
import WorkExperience from "pages/WorkExp";
import { useState } from "react";
const App = () => {
  const [active, setActive] = useState<ActiveScreen>({
    currentIndex: 3,
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
        <WorkExperience activeIndex={active.currentIndex} index={2} />
        <CardWrapper activeIndex={active.currentIndex} index={3}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet eos
          repudiandae tenetur voluptatem odio, rerum blanditiis reiciendis eum
          quod veritatis magnam dolores, perferendis magni, quasi natus numquam
          est obcaecati doloremque!
        </CardWrapper>
        <CardWrapper activeIndex={active.currentIndex} index={4}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed rerum
          quasi voluptatibus ipsum magnam quod nobis tempore velit culpa nemo
          est esse ut, qui, maxime laborum error nisi nihil. Nisi!
        </CardWrapper>
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
          index={3}
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
