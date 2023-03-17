import { Modal, Box } from "@mui/material";
import React from "react";
import styles from "./styles";

interface SimpleModalProps {
  isOpen: boolean;
  handleClose: () => void;
  children: React.ReactNode;
}

export const SimpleModal = ({
  isOpen,
  handleClose,
  children,
}: SimpleModalProps) => {
  function getModalStyle() {
    const top = 50;
    const left = 50;

    return {
      top: `${top}%`,
      left: `${left}%`,
      transform: `translate(-${top}%, -${left}%)`,
    };
  }

  const [modalStyle] = React.useState(getModalStyle);

  return (
    <Modal
      open={isOpen}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box style={modalStyle} sx={styles.paper}>
        <Box sx={styles.mainContainer}>{children}</Box>
      </Box>
    </Modal>
  );
};
export default SimpleModal;
