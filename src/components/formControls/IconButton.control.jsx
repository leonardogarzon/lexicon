import { ClayButtonWithIcon } from "@clayui/button";

const spritemap = "/images/icons/icons.svg";

const IconButtonControl = ({ displayType, ariaLabel, onClick, disabled, symbol }) => {
  return (
    <ClayButtonWithIcon
      displayType={displayType}
      aria-label={ariaLabel} 
      onClick={onClick}
      disabled={disabled}
      spritemap={spritemap}
      symbol={symbol}
      title={ariaLabel}
    ></ClayButtonWithIcon>
  );
};

export default IconButtonControl;
