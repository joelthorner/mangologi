import React from 'react';
import { OverlayTrigger, Tooltip } from 'react-bootstrap';

const TemplateType = ({ template }) => {
  return template.type !== null ? (
    <OverlayTrigger placement="top" overlay={<Tooltip>Template</Tooltip>}>
      <div className="item item-template-type">
        <span
          className={`icon icon-template-type icon-${template.type}`}
        ></span>
        {template.type}
      </div>
    </OverlayTrigger>
  ) : null;
};

export default TemplateType;
