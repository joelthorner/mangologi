import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Button from 'react-bootstrap/Button';
import Ratio from 'react-bootstrap/Ratio';
import {
  setBackImage,
  setShowBackImage,
} from '../../../../slices/unsplashSlice';
import { modifyProps } from '../../../../slices/chromeSyncSlice';
import { OverlayTrigger, Tooltip } from 'react-bootstrap';
import PreviewModal from './PreviewModal';
import { IconZoom } from '../../../../components/Icons';

const SelectedBg = () => {
  const dispatch = useDispatch();
  const [modalShow, setModalShow] = useState(false);
  const chromeSync = useSelector((state) => state.chromeSync);
  const { backImage, showBackImage } = useSelector((state) => state.unsplash);

  const backImageInit = chromeSync.storage.lcBackground.props;
  const styles = {
    backgroundImage: `url(${chromeSync.storage.lcBackground.props.thumb})`,
  };

  useEffect(() => {
    if (Object.keys(backImage).length === 0) {
      dispatch(setBackImage(backImageInit));
    }
  }, [backImage, backImageInit, dispatch]);

  return (
    <div className="selected-bg">
      <div className="title">
        {chrome.i18n.getMessage(`currentSelected`)}
        {showBackImage ? (
          <Button
            className="undo-btn"
            variant="link"
            onClick={() => {
              dispatch(
                modifyProps([
                  ['lcBackground', 'image', backImage.image],
                  ['lcBackground', 'thumb', backImage.thumb],
                  ['lcBackground', 'regular', backImage.regular],
                  ['lcBackground', 'userName', backImage.userName],
                  ['lcBackground', 'userLink', backImage.userLink],
                  [
                    'lcBackground',
                    'downloadLocation',
                    backImage.downloadLocation,
                  ],
                ])
              );
              dispatch(setShowBackImage(false));
            }}
          >
            {chrome.i18n.getMessage(`undo`)}
          </Button>
        ) : null}
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
            <IconZoom />
          </Button>
        </OverlayTrigger>

        <Ratio aspectRatio="16x9">
          <div className="bg" style={styles}></div>
        </Ratio>

        <a
          href={chromeSync.storage.lcBackground.props.userLink}
          target="_blank"
          rel="noopener noreferrer"
          className="author"
        >
          {chromeSync.storage.lcBackground.props.userName}
        </a>
        <PreviewModal
          show={modalShow}
          onHide={() => setModalShow(false)}
          imgSrc={chromeSync.storage.lcBackground.props.regular}
          userName={chromeSync.storage.lcBackground.props.userName}
          userLink={chromeSync.storage.lcBackground.props.userLink}
        />
      </div>
    </div>
  );
};

export default SelectedBg;
