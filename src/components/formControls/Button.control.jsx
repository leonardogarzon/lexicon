import ClayButton from "@clayui/button";

const ButtonControl = ({ children, displayType = "primary", onClick }) => {
  return (
    <ClayButton displayType={displayType} onClick={onClick}>
      {children}
    </ClayButton>
  );
};

export default ButtonControl;
