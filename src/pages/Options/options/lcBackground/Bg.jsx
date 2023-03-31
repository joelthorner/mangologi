import React, { useState } from 'react';

import Ratio from 'react-bootstrap/Ratio';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import Button from 'react-bootstrap/Button';
import PreviewModal from './PreviewModal';

const Bg = ({ className, bgUrl, userLink, userName, previewSrc }) => {
  const [modalShow, setModalShow] = useState(false);
  const styles = {
    backgroundImage: `url(${bgUrl})`,
  };

  return (
    <div className={'bg-item' + (className ? ' ' + className : '')}>
      <OverlayTrigger
        placement="top"
        overlay={<Tooltip>{chrome.i18n.getMessage(`previewZoomImg`)}</Tooltip>}
      >
        <Button
          className="zoom-btn"
          variant="link"
          onClick={() => setModalShow(true)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="icon"
            viewBox="0 0 16 16"
          >
            <path
              fillRule="evenodd"
              d="M6.5 12a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11zM13 6.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0z"
            />
            <path d="M10.344 11.742c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1 6.538 6.538 0 0 1-1.398 1.4z" />
            <path
              fillRule="evenodd"
              d="M6.5 3a.5.5 0 0 1 .5.5V6h2.5a.5.5 0 0 1 0 1H7v2.5a.5.5 0 0 1-1 0V7H3.5a.5.5 0 0 1 0-1H6V3.5a.5.5 0 0 1 .5-.5z"
            />
          </svg>
        </Button>
      </OverlayTrigger>

      <Ratio aspectRatio="16x9">
        <button
          onClick={() => {
            alert();
          }}
          className="bg"
          style={styles}
        ></button>
      </Ratio>

      <a
        href={userLink}
        target="_blank"
        rel="noopener noreferrer"
        className="author"
      >
        {userName}
      </a>
      <PreviewModal
        show={modalShow}
        onHide={() => setModalShow(false)}
        imgSrc={previewSrc}
        userName={userName}
        userLink={userLink}
      />
    </div>
  );
};

export default Bg;
