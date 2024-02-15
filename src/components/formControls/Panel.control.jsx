import ClayPanel from '@clayui/panel';
const spritemap = "/images/icons/icons.svg";


const PanelControl = ({ children, title }) => {
  return (
    <ClayPanel
    displayTitle={title}
    displayType="secondary"
    showCollapseIcon={true}
    spritemap={spritemap}
  >
    <ClayPanel.Body>{children}</ClayPanel.Body>
  </ClayPanel>
  );
};

export default PanelControl;