import ClayLayout from "@clayui/layout";

const LayoutControl = ({ children, justify }) => {
  return <ClayLayout.Row justify={justify}>{children}</ClayLayout.Row>;
};

export default LayoutControl;
