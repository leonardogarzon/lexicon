import { ClayIconSpriteContext } from "@clayui/icon";
import ClayLayout from "@clayui/layout";
const spritemap = "/images/icons/icons.svg";

const ContainerControl = ({ children, style }) => {
  return (
    <ClayIconSpriteContext.Provider value={spritemap}>
      <ClayLayout.ContainerFluid view style={style}>
        {children}
      </ClayLayout.ContainerFluid>
    </ClayIconSpriteContext.Provider>
  );
};

export default ContainerControl;
