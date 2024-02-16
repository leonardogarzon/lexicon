import ClayCard from "@clayui/card";
import ClayLayout from "@clayui/layout";

const CardControl = ({ children, title, description, footer }) => {
  return (
    <ClayLayout.Col sm={12} md={4}>
      <ClayCard>
        <ClayCard.Body>
          {title && (
            <ClayCard.Description displayType="title">
              demo
            </ClayCard.Description>
          )}
          {description && (
            <ClayCard.Description
              truncate={false}
              displayType="text"
            >
              {description}
            </ClayCard.Description>
          )}
          {children}
          {footer}
        </ClayCard.Body>
      </ClayCard>
    </ClayLayout.Col>
  );
};

export default CardControl;
