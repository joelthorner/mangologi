import React from 'react';
import { Nav, Tab, Tooltip, OverlayTrigger } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { modifyAvatar } from '../../../../slices/chromeSyncSlice';
import Ripple from '../../../../components/Ripple/Ripple';
import { avatars } from '../../../../data/avatarsData';
import ProfileHeader from '../../components/ProfileHeader';
import ContentHeader from '../../components/ContentHeader';
import Content from '../../components/Content';

const PageAvatar = () => {
  const chromeSync = useSelector((state) => state.chromeSync);
  const avatarCats = ['ANIMATION', 'MEMES', 'MOVIES', 'OTHER', 'VIDEOGAMES'];
  const avatarSelected = 'AVATARS_TAB_ALL';

  return (
    <>
      <ContentHeader title="Profile" />
      <Content>
        <ProfileHeader data={chromeSync.storage.profile}></ProfileHeader>
        <div className="avatar-tabs-container">
          <Tab.Container
            id="avatar-tabs"
            defaultActiveKey={avatarSelected}
            transition={false}
          >
            <Nav variant="pills" className="flex-column">
              <Nav.Item key={`tab-nav-AVATARS_TAB_ALL`}>
                <Nav.Link eventKey={`AVATARS_TAB_ALL`}>
                  {chrome.i18n.getMessage(`avatarTab_ALL`)}
                </Nav.Link>
              </Nav.Item>
              {avatarCats.map((cat) => (
                <Nav.Item key={`tab-nav-AVATARS_TAB_${cat}`}>
                  <Nav.Link eventKey={`AVATARS_TAB_${cat}`}>
                    {chrome.i18n.getMessage(`avatarTab_${cat}`)}
                  </Nav.Link>
                </Nav.Item>
              ))}
            </Nav>

            <Tab.Content>
              <Tab.Pane
                key={`tab-pane-AVATARS_TAB_ALL`}
                eventKey={`AVATARS_TAB_ALL`}
              >
                <div className="grid-avatars">
                  {Object.keys(avatars).map((key) => {
                    return avatars[key].map((avatar, index) => (
                      <Avatar key={`all-avatar-${index}`} avatar={avatar} />
                    ));
                  })}
                </div>
              </Tab.Pane>
              {avatarCats.map((cat) => (
                <Tab.Pane
                  key={`tab-pane-AVATARS_TAB_${cat}`}
                  eventKey={`AVATARS_TAB_${cat}`}
                >
                  <div className="grid-avatars">
                    {avatars[cat.toLowerCase()].map((avatar, index) => (
                      <Avatar key={`${cat}-avatar-${index}`} avatar={avatar} />
                    ))}
                  </div>
                </Tab.Pane>
              ))}
            </Tab.Content>
          </Tab.Container>
        </div>
      </Content>
    </>
  );
};

const Avatar = ({ avatar }) => {
  const dispatch = useDispatch();

  return (
    <OverlayTrigger
      popperConfig={{ preventOverflow: true }}
      placement="top"
      overlay={<Tooltip>{avatar.name}</Tooltip>}
    >
      <button
        onClick={() => {
          dispatch(modifyAvatar(avatar));
        }}
      >
        <img src={chrome.runtime.getURL(avatar.img)} alt={avatar.name} />
        <Ripple color={'var(--bs-primary)'} duration={500} />
      </button>
    </OverlayTrigger>
  );
};

export default PageAvatar;
