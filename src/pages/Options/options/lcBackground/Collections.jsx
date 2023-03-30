import React from 'react';
import Button from 'react-bootstrap/Button';

const Collections = () => {
  const collections = [
    {
      id: 223661,
      name: 'Joel Favs',
    },
    {
      id: 4297675,
      name: 'Cyber neon',
    },
    {
      id: 4297713,
      name: 'Landscape',
    },
    {
      id: 1131562,
      name: 'Insert Coin(s)',
    },
    {
      id: 3694365,
      name: 'Gradient Nation',
    },
    {
      id: 1103088,
      name: 'One Color',
    },
  ];

  return (
    <div className="collections">
      <div className="title">{chrome.i18n.getMessage(`collectionsTitle`)}</div>
      <ul className="list-unstyled">
        {collections.map((collection) => (
          <li key={collection.id}>
            <Button variant="link" onClick={() => console.log('TODO')}>
              {collection.name}
            </Button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Collections;
