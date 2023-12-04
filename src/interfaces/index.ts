type Props = { children: React.ReactNode };

type ContainerProp = { children: React.ReactNode; gradient: String };
type NavBarElementProp = {
  children: React.ReactNode;
  setBackground: Function;
  setDefaultBackground: Function;
  onClickSetActiveIndex: Function;
  index: Number;
};
type ActiveScreen = {
  currentIndex: Number;
  background: String;
};
type CardProp = {
  children: React.ReactNode | null;
  activeIndex: Number;
  index: Number;
};
type PageProp = {
  activeIndex: Number;
  index: Number;
};
type Conversation = {
  role: String;
  message: String;
};

export type {
  Props,
  ContainerProp,
  NavBarElementProp,
  ActiveScreen,
  CardProp,
  PageProp,
  Conversation,
};
