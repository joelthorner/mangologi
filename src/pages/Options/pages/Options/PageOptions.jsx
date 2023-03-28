import React from 'react';
import { useSelector } from 'react-redux';
import Ripples from 'react-ripples';
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Badge from 'react-bootstrap/Badge';

import ExtraChromeSyncData from '../../../../data/extraChromeSyncData.json';

import Content from '../../components/Content';
import ContentHeader from '../../components/ContentHeader';
// import LcBackground from '../../options/LcBackground';
// import LcDeveloperBar from '../../options/LcDeveloperBar';
// import LcRichPages from '../../options/LcRichPages';
// import AutoDeployVersion from '../../options/AutoDeployVersion';
// import ForcedForceView from '../../options/ForcedForceView';
// import LinkedGitIssues from '../../options/LinkedGitIssues';
// import SandboxSelectorBtns from '../../options/SandboxSelectorBtns';
// import TrackersCodeEditor from '../../options/TrackersCodeEditor';

const PageOptions = () => {
  const chromeSync = useSelector((state) => state.chromeSync);

  const cards = Object.keys(ExtraChromeSyncData).map((key) => {
    const extraData = ExtraChromeSyncData[key];
    const data = chromeSync[key];

    return (
      <Card key={key}>
        <Card.Img variant="top" src={chrome.runtime.getURL(extraData.image)} />
        <Card.Body>
          <Card.Title as="div">
            {chrome.i18n.getMessage(`${key}_language_name`)}
          </Card.Title>
          <Card.Text>
            {chrome.i18n.getMessage(`${key}_language_description`)}
          </Card.Text>
          <div className="tags">
            {extraData.tags.map((tag) => (
              <Badge key={key + tag} pill className={`tag-${tag}`}>
                {chrome.i18n.getMessage(`tags_${tag}`)}
              </Badge>
            ))}
          </div>
        </Card.Body>
        <Card.Footer>
          <Form.Check
            type="switch"
            id="custom-switch"
            checked={data.props.active}
            onChange={() => {
              console.log('TODO');
            }}
            label={
              data.props.active
                ? chrome.i18n.getMessage(`disable`)
                : chrome.i18n.getMessage(`enable`)
            }
          />
          <Link to={`/options/${key}`}>
            {chrome.i18n.getMessage(`editSettings`)}
          </Link>
        </Card.Footer>
      </Card>
    );
  });

  return (
    <>
      <ContentHeader title="Options" />
      <Content>
        <div className="grid">{cards}</div>
      </Content>
    </>
  );
};

export default PageOptions;
