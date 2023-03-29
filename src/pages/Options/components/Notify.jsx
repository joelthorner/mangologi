import React, { useState } from 'react';
import Toast from 'react-bootstrap/Toast';
import ToastContainer from 'react-bootstrap/ToastContainer';

const Notify = () => {
  const [show, setShow] = useState(false);

  chrome.storage.onChanged.addListener((changes, namespace) => {
    setShow(true);
  });

  return (
    <ToastContainer containerPosition="position-fixed" position="bottom-center">
      <Toast
        bg="primary"
        onClose={() => setShow(false)}
        show={show}
        delay={3000}
        autohide
      >
        <Toast.Body>{chrome.i18n.getMessage(`savedSettings`)}</Toast.Body>
      </Toast>
    </ToastContainer>
  );
};

export default Notify;
