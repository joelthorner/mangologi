import React from 'react';
import { OverlayTrigger, Tooltip } from 'react-bootstrap';

const FluidCache = ({ type, fluidCache }) => {
  return type === 'fluid' && fluidCache !== null ? (
    <OverlayTrigger
      placement="top"
      overlay={<Tooltip>Has fluid cache?</Tooltip>}
    >
      <div className="item item-fluidCache">
        <span className={`icon icon-fluidCache icon-${fluidCache}`}></span>
        {fluidCache ? 'Fluid cache' : 'No fluid cache'}
      </div>
    </OverlayTrigger>
  ) : null;
};

export default FluidCache;
