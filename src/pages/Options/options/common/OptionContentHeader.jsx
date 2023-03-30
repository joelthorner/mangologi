import React from 'react';
import { Link } from 'react-router-dom';
import ContentHeader from '../../components/ContentHeader';
import CloseButton from 'react-bootstrap/CloseButton';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Badge from 'react-bootstrap/Badge';
import Tooltip from 'react-bootstrap/Tooltip';

const OptionContentHeader = ({ keyData, extraData }) => {
  return (
    <ContentHeader title={chrome.i18n.getMessage(`${keyData}_language_name`)}>
      <p>{chrome.i18n.getMessage(`${keyData}_language_description`)}</p>
      <div className="tags">
        {extraData.tags.map((tag) => (
          <OverlayTrigger
            key={keyData + tag + 'page-tooltip'}
            placement="top"
            overlay={
              <Tooltip>{chrome.i18n.getMessage(`tags_${tag}_desc`)}</Tooltip>
            }
          >
            <Badge
              key={keyData + tag + 'page-badge'}
              pill
              className={`tag-${tag}`}
            >
              {chrome.i18n.getMessage(`tags_${tag}`)}
            </Badge>
          </OverlayTrigger>
        ))}
      </div>
      <Link className="close-button-link" to="/options/">
        <CloseButton />
      </Link>
    </ContentHeader>
  );
};

export default OptionContentHeader;
