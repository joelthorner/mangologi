import React from 'react';
import actions from '../../../../data/popupActionsData';
import ButtonAction from './ButtonAction';

const NavTabContent = ({ keyData }) => {
  const data = actions[keyData];

  return (
    <div className="grid">
      {data.map((item, index) => (
        <ButtonAction key={`action-${keyData}-${index}`} item={item} />
      ))}
    </div>
  );
};

export default NavTabContent;
