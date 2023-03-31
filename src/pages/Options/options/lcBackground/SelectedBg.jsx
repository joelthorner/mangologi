import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import Button from 'react-bootstrap/Button';
import Ratio from 'react-bootstrap/Ratio';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import PreviewModal from './PreviewModal';

const SelectedBg = ({ keyData }) => {
  const [modalShow, setModalShow] = useState(false);
  const chromeSync = useSelector((state) => state.chromeSync);
  const styles = {
    backgroundImage: `url(${chromeSync.storage[keyData].props.thumb})`,
  };

  return (
    <div className="selected-bg">
      <div className="title">
        {chrome.i18n.getMessage(`currentSelected`)}
        <Button
          className="undo-btn"
          variant="link"
          onClick={() => {
            console.log('TODO');
          }}
        >
          {chrome.i18n.getMessage(`undo`)}
        </Button>
      </div>

      <div className="bg-item bg-item-selected-main">
        <OverlayTrigger
          placement="top"
          overlay={
            <Tooltip>{chrome.i18n.getMessage(`previewZoomImg`)}</Tooltip>
          }
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
        <PreviewModal show={modalShow} onHide={() => setModalShow(false)} />

        <Ratio aspectRatio="16x9">
          <div className="bg" style={styles}></div>
        </Ratio>

        <a
          href={chromeSync.storage[keyData].props.userLink}
          target="_blank"
          rel="noopener noreferrer"
          className="author"
        >
          {chromeSync.storage[keyData].props.userName}
        </a>
      </div>
    </div>
  );
};

export default SelectedBg;
