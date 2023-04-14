import React, { useState } from 'react';
import { Nav, Tab } from 'react-bootstrap';
import Ripple from '../../../components/Ripple/Ripple';
import NavTabContent from '../components/navTabs/NavTabContent';

const NavTabs = () => {
  const [defaultActiveKey, setDefaultActiveKey] = useState('utils');

  chrome.storage.local.get(['lastPopupTab']).then((result) => {
    console.log(result.lastPopupTab);
    setDefaultActiveKey(result.lastPopupTab);
  });

  return (
    <div className="nav-tabs-actions">
      <Tab.Container
        id="popup-tabs"
        defaultActiveKey="utils"
        activeKey={defaultActiveKey}
        transition={false}
        onSelect={(eventKey, event) => {
          setDefaultActiveKey(eventKey);
          chrome.storage.local.set({ lastPopupTab: eventKey });
        }}
      >
        <Nav className="nav-tabs">
          <Nav.Item>
            <Nav.Link eventKey="utils">
              Utils
              <Ripple color={'var(--bs-primary)'} duration={500} />
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="testing">
              Testing
              <Ripple color={'var(--bs-primary)'} duration={500} />
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="lcHacks">
              LC hacks
              <Ripple color={'var(--bs-primary)'} duration={500} />
            </Nav.Link>
          </Nav.Item>
        </Nav>

        <Tab.Content>
          <Tab.Pane eventKey="utils">
            <NavTabContent keyData="utils" />
          </Tab.Pane>
          <Tab.Pane eventKey="testing">
            <NavTabContent keyData="testing" />
          </Tab.Pane>
          <Tab.Pane eventKey="lcHacks">
            <NavTabContent keyData="lcHacks" />
          </Tab.Pane>
        </Tab.Content>
      </Tab.Container>
    </div>
  );
};

export default NavTabs;
