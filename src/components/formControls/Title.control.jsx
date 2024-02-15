import { Heading } from "@clayui/core";
import ClayLayout from "@clayui/layout";

const TitleControl = ({ children, level, sm = 12, md, xl }) => {
  return (
    <ClayLayout.Col sm={sm} md={md} xl={xl}>
      <Heading level={level} weight="semi-bold">
        {children}
      </Heading>
    </ClayLayout.Col>
  );
};

export default TitleControl;
