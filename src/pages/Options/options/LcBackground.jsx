import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Form from 'react-bootstrap/Form';
import Content from '../components/Content';
import ExtraChromeSyncData from '../../../data/extraChromeSyncData.json';
import { fetchRandomImages } from '../../../slices/unsplashSlice';
import OptionContentHeader from './common/OptionContentHeader';
import ActiveSwitch from './common/ActiveSwitch';
import Collections from './lcBackground/Collections';
import SelectedBg from './lcBackground/SelectedBg';

const KEY = 'lcBackground';

const LcBackground = () => {
  const dispatch = useDispatch();
  const chromeSync = useSelector((state) => state.chromeSync);
  const extraData = ExtraChromeSyncData[KEY];
  const data = chromeSync.storage[KEY];
  const { randomImages, loading } = useSelector((state) => state.unsplash);

  useEffect(() => {
    dispatch(fetchRandomImages());
  }, [dispatch]);

  // const dispatch = useDispatch();
  // const { loading, error, randomImages } = useSelector(randomImagesSelector);

  // useEffect(() => {
  //   dispatch(fetchRandomImages());
  // }, [dispatch]);

  // // render the items
  // const renderItems = () => {
  //   // loading state
  //   if (loading) return <strong>Loading please wait...</strong>;

  //   // error state
  //   if (error) return <strong>Items not available at this time</strong>;

  //   // regular data workflow
  //   return randomImages.map((i) => console.log(i));
  // };

  return (
    <>
      <OptionContentHeader keyData={KEY} extraData={extraData} />
      <Content>
        <ActiveSwitch keyData={KEY} data={data} />

        <div className="lc-background-content">
          <div className="col">
            <Form.Control
              type="search"
              placeholder={chrome.i18n.getMessage(`searchPlaceholder`)}
            />
            <SelectedBg keyData={KEY} data={data} />
            <Collections />
          </div>
          <div className="col-content">
            <div className="grid-background-items">
              {!loading ? console.log(randomImages) : <div>Loading...</div>}
              {/* <button
                onClick={() => {
                  // dispatch(getRandomUnsplash());
                }}
              >
                ljkahsdkjlashdhas
              </button> */}
            </div>
          </div>
        </div>
      </Content>
    </>
  );
};

export default LcBackground;
