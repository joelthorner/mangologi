import { capitalize } from 'lodash';
import React from 'react';
import { OverlayTrigger, Tooltip } from 'react-bootstrap';

const Type = ({ type }) => {
  return type !== null ? (
    <OverlayTrigger placement="top" overlay={<Tooltip>Commerce type</Tooltip>}>
      <div className="item item-type">
        <span className={`icon icon-type icon-${type}`}></span>
        {capitalize(type)}
      </div>
    </OverlayTrigger>
  ) : null;
};

export default Type;
