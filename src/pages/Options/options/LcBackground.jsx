import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Form from 'react-bootstrap/Form';
import Spinner from 'react-bootstrap/Spinner';
import Content from '../components/Content';
import ExtraChromeSyncData from '../../../data/extraChromeSyncData.json';
import { fetchRandomImages } from '../../../slices/unsplashSlice';
import OptionContentHeader from './common/OptionContentHeader';
import ActiveSwitch from './common/ActiveSwitch';
import Collections from './lcBackground/Collections';
import SelectedBg from './lcBackground/SelectedBg';
import Bg from './lcBackground/Bg';

const KEY = 'lcBackground';

const LcBackground = () => {
  const dispatch = useDispatch();
  const chromeSync = useSelector((state) => state.chromeSync);
  const extraData = ExtraChromeSyncData[KEY];
  const data = chromeSync.storage[KEY];
  const { randomImages, loading } = useSelector((state) => state.unsplash);

  useEffect(() => {
    if (randomImages.length === 0) {
      dispatch(fetchRandomImages());
    }
  }, [randomImages, dispatch]);

  return (
    <>
      <OptionContentHeader keyData={KEY} extraData={extraData} />
      <Content>
        <div className="lc-background-content">
          <div className="col">
            <ActiveSwitch keyData={KEY} data={data} />
            <Form.Control
              type="search"
              placeholder={chrome.i18n.getMessage(`searchPlaceholder`)}
            />
            <SelectedBg keyData={KEY} data={data} />
            <Collections />
          </div>
          <div className="col-content">
            <div className="grid-background-items">
              {!loading ? (
                randomImages.map((image) => (
                  <Bg
                    key={image.id}
                    className="bg-item-selected-main"
                    bgUrl={image.urls.small}
                    userLink={image.user.links.html}
                    userName={image.user.name}
                    previewSrc={image.urls.regular}
                  />
                ))
              ) : (
                <div className="spinner-border-wrap">
                  <Spinner animation="border" variant="primary" />
                </div>
              )}
            </div>
          </div>
        </div>
      </Content>
    </>
  );
};

export default LcBackground;
