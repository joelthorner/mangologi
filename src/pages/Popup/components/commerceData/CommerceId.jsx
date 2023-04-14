import React from 'react';
import { OverlayTrigger, Tooltip } from 'react-bootstrap';

const CommerceId = ({ commerceId }) => {
  return commerceId !== null ? (
    <OverlayTrigger placement="top" overlay={<Tooltip>Commerce id</Tooltip>}>
      <div className="item item-commerceId">
        <span className={`icon icon-commerceId icon-${commerceId}`}></span>
        {commerceId}
      </div>
    </OverlayTrigger>
  ) : null;
};

export default CommerceId;
