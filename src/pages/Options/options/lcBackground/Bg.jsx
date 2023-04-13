import React, { useState } from 'react';
import secrets from 'secrets';
import { useSelector, useDispatch } from 'react-redux';

import Ratio from 'react-bootstrap/Ratio';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import Button from 'react-bootstrap/Button';
import PreviewModal from './PreviewModal';

import { modifyProps } from '../../../../slices/chromeSyncSlice';
import {
  setShowBackImage,
  setBackImage,
} from '../../../../slices/unsplashSlice';
import { IconZoom } from '../../../../components/Icons';

const Bg = (props) => {
  const chromeSync = useSelector((state) => state.chromeSync);
  const [modalShow, setModalShow] = useState(false);
  const dispatch = useDispatch();

  const styles = {
    backgroundImage: `url(${props.bgUrl})`,
  };
  const selectBg = (event) => {
    dispatch(
      modifyProps([
        ['lcBackground', 'image', props.unsplashData.urls.full],
        ['lcBackground', 'thumb', props.unsplashData.urls.small],
        ['lcBackground', 'regular', props.unsplashData.urls.regular],
        ['lcBackground', 'userName', props.unsplashData.user.name],
        ['lcBackground', 'userLink', props.unsplashData.user.links.html],
        [
          'lcBackground',
          'downloadLocation',
          `${props.unsplashData.links.download_location}?client_id=${secrets.UNSPLASH_ACCESS_KEY}`,
        ],
      ])
    );
    dispatch(setShowBackImage(true));
    dispatch(
      setBackImage({
        image: chromeSync.storage.lcBackground.props.image,
        thumb: chromeSync.storage.lcBackground.props.thumb,
        regular: chromeSync.storage.lcBackground.props.regular,
        userName: chromeSync.storage.lcBackground.props.userName,
        userLink: chromeSync.storage.lcBackground.props.userLink,
      })
    );
  };

  return (
    <div className={'bg-item' + (props.className ? ' ' + props.className : '')}>
      <OverlayTrigger
        placement="top"
        overlay={<Tooltip>{chrome.i18n.getMessage(`previewZoomImg`)}</Tooltip>}
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
        <OverlayTrigger
          delay={{ show: 1000, hide: 0 }}
          placement="top"
          overlay={<Tooltip>{chrome.i18n.getMessage(`selectBgImage`)}</Tooltip>}
        >
          <button
            onClick={() => {
              selectBg();
            }}
            className="bg"
            style={styles}
          ></button>
        </OverlayTrigger>
      </Ratio>

      <a
        href={props.userLink}
        target="_blank"
        rel="noopener noreferrer"
        className="author"
      >
        {props.userName}
      </a>
      <PreviewModal
        show={modalShow}
        onHide={() => setModalShow(false)}
        imgSrc={props.previewSrc}
        userName={props.userName}
        userLink={props.userLink}
      />
    </div>
  );
};

export default Bg;
