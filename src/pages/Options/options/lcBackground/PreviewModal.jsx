import React from 'react';
import Modal from 'react-bootstrap/Modal';

const PreviewModal = (props) => {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      className="preview-modal"
    >
      <Modal.Body>
        <a href={props.userLink} target="_blank" rel="noopener noreferrer">
          {props.userName}
        </a>
        <img src={props.imgSrc} alt={props.imgAlt} />
      </Modal.Body>
    </Modal>
  );
};

export default PreviewModal;
