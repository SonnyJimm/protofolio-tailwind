type Props = { children: React.ReactNode };

type ContainerProp = { children: React.ReactNode; gradient: String };
type NavBarElementProp = {
  children: React.ReactNode;
  setBackground: Function;
  setDefaultBackground: Function;
};
type ActiveScreen = {
  currentIndex: Number;
  background: String;
};
export type { Props, ContainerProp, NavBarElementProp, ActiveScreen };
