import React from 'react';
import Modal from 'react-bootstrap/Modal';

const PreviewModal = ({ show, onHide, imgSrc, userName, userLink }) => {
  return (
    <Modal
      show={show}
      onHide={onHide}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      className="preview-modal"
    >
      <Modal.Body>
        <a href={userLink} target="_blank" rel="noopener noreferrer">
          {userName}
        </a>
        <img src={imgSrc} alt={userName} />
      </Modal.Body>
    </Modal>
  );
};

export default PreviewModal;
