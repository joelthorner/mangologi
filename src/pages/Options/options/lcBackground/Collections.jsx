import React from 'react';
import Button from 'react-bootstrap/Button';
import { useDispatch } from 'react-redux';
import { setSelectedCollection } from '../../../../slices/unsplashSlice';
import collections from '../../../../data/unsplashCollectionsData';

const Collections = () => {
  const dispatch = useDispatch();

  return (
    <div className="collections">
      <div className="title">{chrome.i18n.getMessage(`collectionsTitle`)}</div>
      <ul className="list-unstyled">
        {collections.map((collection) => (
          <li key={collection.id}>
            <Button
              variant="link"
              onClick={() => {
                dispatch(setSelectedCollection(collection.id));
              }}
            >
              {collection.name}
            </Button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Collections;
