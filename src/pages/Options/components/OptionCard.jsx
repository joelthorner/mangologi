import React from 'react';
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Badge from 'react-bootstrap/Badge';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import { useDispatch } from 'react-redux';
import { modifyProp } from '../../../slices/chromeSyncSlice';

const OptionCard = ({ keyData, data, extraData }) => {
  const dispatch = useDispatch();

  return (
    <Card>
      <Link to={`/options/${keyData}`}>
        <Card.Img variant="top" src={chrome.runtime.getURL(extraData.image)} />
      </Link>
      <Card.Body>
        <Card.Title as="div">
          <Link to={`/options/${keyData}`}>
            {chrome.i18n.getMessage(`${keyData}_language_name`)}
          </Link>
        </Card.Title>
        <Card.Text>
          {chrome.i18n.getMessage(`${keyData}_language_description`)}
        </Card.Text>
        <div className="tags">
          {extraData.tags.map((tag) => (
            <OverlayTrigger
              key={keyData + tag + 'tooltip'}
              placement="top"
              overlay={
                <Tooltip>{chrome.i18n.getMessage(`tags_${tag}_desc`)}</Tooltip>
              }
            >
              <Badge key={keyData + tag + 'badge'} pill bg={tag}>
                {chrome.i18n.getMessage(`tags_${tag}`)}
              </Badge>
            </OverlayTrigger>
          ))}
        </div>
      </Card.Body>
      <Card.Footer>
        <Form.Check
          type="switch"
          id={`active-switch-${keyData}`}
          checked={data.props.active}
          onChange={() => {
            dispatch(modifyProp([keyData, 'active', !data.props.active]));
          }}
          label={
            data.props.active
              ? chrome.i18n.getMessage(`disable`)
              : chrome.i18n.getMessage(`enable`)
          }
        />
        <Link to={`/options/${keyData}`}>
          {chrome.i18n.getMessage(`editSettings`)}
        </Link>
      </Card.Footer>
    </Card>
  );
};

export default OptionCard;
