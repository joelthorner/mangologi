import React from 'react';
import { OverlayTrigger, Tooltip } from 'react-bootstrap';

const Environment = ({ environment }) => {
  return environment !== null ? (
    <OverlayTrigger placement="top" overlay={<Tooltip>Environment</Tooltip>}>
      <div className="item item-environment">
        <span className={`icon icon-environment icon-${environment}`}></span>
        {environment}
      </div>
    </OverlayTrigger>
  ) : null;
};

export default Environment;
