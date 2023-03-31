import React from 'react';
import { useSelector } from 'react-redux';
import Button from 'react-bootstrap/Button';
import Bg from './Bg';

const SelectedBg = ({ keyData }) => {
  const chromeSync = useSelector((state) => state.chromeSync);

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
      <Bg
        className="bg-item-selected-main"
        bgUrl={chromeSync.storage[keyData].props.thumb}
        userLink={chromeSync.storage[keyData].props.userLink}
        userName={chromeSync.storage[keyData].props.userName}
        previewSrc={chromeSync.storage[keyData].props.regular}
      />
    </div>
  );
};

export default SelectedBg;
