import ClayButton from "@clayui/button";
import ClayModal, { useModal } from "@clayui/modal";
import { useEffect } from "react";

const spritemap = "/images/icons/icons.svg";

const ModalControl = ({ children, title, buttonTitle, footer }) => {
  const { observer, onOpenChange, open } = useModal();

  return (
    <>
      {open && (
        <ClayModal
          observer={observer}
          size="lg"
          spritemap={spritemap}
          status="info"
        >
          <ClayModal.Header>{title}</ClayModal.Header>
          <ClayModal.Body>{children}</ClayModal.Body>
          <ClayModal.Footer last={footer} />
        </ClayModal>
      )}
      <ClayButton onClick={() => onOpenChange(true)}>{buttonTitle}</ClayButton>
    </>
  );
};

export default ModalControl;
