import ClayCard from "@clayui/card";
import ClayLayout from "@clayui/layout";

const CardControl = ({ children, title, footer }) => {
  return (
    <ClayLayout.Col sm={12} md={4}>
      <ClayCard>
        <ClayCard.Body>
          {title && (
            <ClayCard.Description displayType="title"></ClayCard.Description>
          )}
          <ClayCard.Description truncate={false} displayType="text">
            {children}
          </ClayCard.Description>
          {footer}
        </ClayCard.Body>
      </ClayCard>
    </ClayLayout.Col>
  );
};

export default CardControl;
