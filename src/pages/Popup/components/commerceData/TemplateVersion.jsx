import React from 'react';
import { OverlayTrigger, Tooltip } from 'react-bootstrap';

const TemplateVersion = ({ template }) => {
  return template.version !== null ? (
    <OverlayTrigger
      placement="top"
      overlay={<Tooltip>Template version</Tooltip>}
    >
      <div className="item item-template-version">
        <span
          className={`icon icon-template-version icon-${template.version}`}
        ></span>
        {template.version}
      </div>
    </OverlayTrigger>
  ) : null;
};

export default TemplateVersion;
