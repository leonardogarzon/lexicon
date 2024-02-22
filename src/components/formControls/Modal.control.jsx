import ClayModal, { useModal } from "@clayui/modal";
import { useEffect } from "react";

const spritemap = "/images/icons/icons.svg";

const ModalControl = ({ children, title, type, openState }) => {
  const { observer, onOpenChange, open, onClose } = useModal();

  useEffect(() => {
    onOpenChange(openState);
  }, [openState]);

  return (
    <>
      {open && (
        <ClayModal
          observer={observer}
          size="lg"
          spritemap={spritemap}
          status={type}
          disableAutoClose={true}
        >
          <ClayModal.Header>{title}</ClayModal.Header>
          {children}
        </ClayModal>
      )}
    </>
  );
};

const ModalFooterControl = ({ children }) => {
  return <ClayModal.Footer last={children} />;
};

const ModalBodyControl = ({ children }) => {
  return <ClayModal.Body>{children}</ClayModal.Body>;
};

export { ModalControl, ModalFooterControl, ModalBodyControl };
