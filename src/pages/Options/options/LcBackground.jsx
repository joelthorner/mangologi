import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Form from 'react-bootstrap/Form';
// import Spinner from 'react-bootstrap/Spinner';
import Placeholder from 'react-bootstrap/Placeholder';
import { PaginationControl } from 'react-bootstrap-pagination-control';
import Content from '../components/Content';
import OptionContentHeader from './common/OptionContentHeader';
import ActiveSwitch from './common/ActiveSwitch';
import Collections from './lcBackground/Collections';
import SelectedBg from './lcBackground/SelectedBg';
import Bg from './lcBackground/Bg';
import ExtraChromeSyncData from '../../../data/extraChromeSyncData.json';
import {
  fetchRandomImages,
  fetchCollection,
  setCurrentPage,
} from '../../../slices/unsplashSlice';

const KEY = 'lcBackground';

const getImagesSource = (images, randomImages) => {
  return images.length ? images : randomImages;
};

const LcBackground = () => {
  const dispatch = useDispatch();
  const chromeSync = useSelector((state) => state.chromeSync);
  const extraData = ExtraChromeSyncData[KEY];
  const data = chromeSync.storage[KEY];

  const {
    images,
    randomImages,
    loading,
    selectedCollection,
    currentPage,
    perPage,
    totalRows,
  } = useSelector((state) => state.unsplash);

  useEffect(() => {
    if (randomImages.length === 0) {
      dispatch(fetchRandomImages());
    }
  }, [randomImages, dispatch]);

  useEffect(() => {
    if (selectedCollection !== 0) {
      dispatch(fetchCollection(selectedCollection, currentPage));
    }
  }, [currentPage, selectedCollection, dispatch]);

  const gridBgs = () => {
    const imagesArr = getImagesSource(images, randomImages);
    const items = imagesArr.map((image) => (
      <Bg
        key={image.id}
        bgUrl={image.urls.small}
        userLink={image.user.links.html}
        userName={image.user.name}
        previewSrc={image.urls.regular}
      />
    ));

    let placeholders = 0;
    if (imagesArr.length < perPage) {
      placeholders = perPage - imagesArr.length;
    }

    const placeholderItems = Array.from(Array(placeholders).keys()).map(
      (pl, index) => (
        <div className="bg-item">
          <Placeholder
            className="ratio ratio-16x9"
            key={'bg-pl-' + index}
            as="div"
            animation="glow"
          >
            <Placeholder xs={12} />
          </Placeholder>
        </div>
      )
    );

    return (
      <>
        {items}
        {placeholderItems}
      </>
    );
  };

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
            <div className="grid-background-items">{gridBgs()}</div>
            <PaginationControl
              page={currentPage}
              between={4}
              total={totalRows}
              limit={perPage}
              changePage={(page) => {
                dispatch(setCurrentPage(page));
              }}
              ellipsis={1}
            />
          </div>
        </div>
      </Content>
    </>
  );
};

export default LcBackground;
