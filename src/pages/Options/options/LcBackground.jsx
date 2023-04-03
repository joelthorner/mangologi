import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Form from 'react-bootstrap/Form';
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
  fetchSearch,
  setCurrentPage,
} from '../../../slices/unsplashSlice';
import debounce from 'lodash/debounce';

const KEY = 'lcBackground';

const getImagesSource = (images, randomImages) => {
  return images.length ? images : randomImages;
};

const LcBackground = () => {
  const dispatch = useDispatch();
  const chromeSync = useSelector((state) => state.chromeSync);
  const [isValidSearch, setIsValidSearch] = useState(null);
  const extraData = ExtraChromeSyncData[KEY];
  const data = chromeSync.storage[KEY];

  const {
    images,
    randomImages,
    selectedCollection,
    currentPage,
    perPage,
    totalRows,
    mode,
    searchCriteria,
    error,
  } = useSelector((state) => state.unsplash);

  const onChange = (event) => {
    dispatch(fetchSearch(event.target.value, currentPage));
  };
  const debouncedOnChange = debounce(onChange, 500);

  const gridBgs = () => {
    const imagesArr = getImagesSource(images, randomImages);
    const items = imagesArr.map((image) => (
      <Bg
        key={image.id}
        bgUrl={image.urls.small}
        userLink={image.user.links.html}
        userName={image.user.name}
        previewSrc={image.urls.regular}
        unsplashData={image}
      />
    ));

    let placeholders = 0;
    if (imagesArr.length < perPage) {
      placeholders = perPage - imagesArr.length;
    }

    const placeholderItems = Array.from(Array(placeholders).keys()).map(
      (pl, index) => (
        <div className="bg-item" key={'bg-pl-' + index}>
          <Placeholder className="ratio ratio-16x9" as="div" animation="glow">
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

  // useEffect(() => {
  //   let isValid = null;
  //   if (mode !== 'search') isValid = null;
  //   else isValid = searchCriteria.length > 0 && images.length > 0;
  //   setIsValidSearch(isValid);
  // }, [images, mode, searchCriteria]);

  useEffect(() => {
    if (randomImages.length === 0) dispatch(fetchRandomImages());
  }, [randomImages, dispatch]);

  useEffect(() => {
    if (selectedCollection !== 0)
      dispatch(fetchCollection(selectedCollection, currentPage));
  }, [currentPage, selectedCollection, dispatch]);

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
              onChange={debouncedOnChange}
              isValid={
                mode === 'search' &&
                searchCriteria.length > 0 &&
                images.length > 0
              }
            />
            <SelectedBg data={data} />
            <Collections />
          </div>
          <div className="col-content">
            <div className="grid-background-items">
              {!error ? (
                gridBgs()
              ) : (
                <div className="unsplash-error-api">{error}</div>
              )}
            </div>
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
