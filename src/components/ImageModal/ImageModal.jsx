import React from "react";
import ReactModal from "react-modal";

const ImageModal = ({ photo, closeModal, customStyles }) => {
  return (
    <ReactModal isOpen={true} onRequestClose={closeModal} style={customStyles}>
      <img src={photo.urls.regular} alt={photo.alt_description} />
    </ReactModal>
  );
};

export default ImageModal;
