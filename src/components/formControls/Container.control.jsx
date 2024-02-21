import ClayLayout from "@clayui/layout";

const ContainerControl = ({ children, style }) => {
  return <ClayLayout.ContainerFluid view style={style}>{children}</ClayLayout.ContainerFluid>;
};

export default ContainerControl;
