import ClayIcon from "@clayui/icon";

const spritemap = "/images/icons/icons.svg";
const Iconcontrol = ({ symbol }) => {
  return <ClayIcon symbol={symbol} spritemap={spritemap} />;
};

export default Iconcontrol;
