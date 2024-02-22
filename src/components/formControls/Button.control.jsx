import ClayButton from "@clayui/button";

const ButtonControl = ({
  children,
  displayType,
  onClick,
  disabled,
  ariaLabel,
}) => {
  return (
    <ClayButton aria-label={ariaLabel} displayType={displayType} onClick={onClick} disabled={disabled}>
      {children}
    </ClayButton>
  );
};

export default ButtonControl;
