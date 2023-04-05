import React, { useState } from 'react';
import { IconCheckCircleFill, IconEdit } from './Icons';
import Ripple from '../components/Ripple/Ripple';
import { Button, OverlayTrigger, Tooltip } from 'react-bootstrap';

const ProfileHeader = ({ data, onChangeTab }) => {
  const [syncAccount, setSyncAccount] = useState(false);

  chrome.identity.getProfileUserInfo((data) => {
    const result = data.id ? true : false;
    setSyncAccount(result);
  });

  return (
    <div className="profile-header">
      <div className="image">
        <OverlayTrigger
          placement="bottom"
          overlay={
            <Tooltip>{chrome.i18n.getMessage('userAvatarEdit')}</Tooltip>
          }
        >
          <button onClick={() => onChangeTab('AVATAR')} className="circle">
            <img
              src={chrome.runtime.getURL(
                data.avatar.value.length ? data.avatar.value : 'avatar/user.svg'
              )}
              alt={data.avatar.name}
              width={100}
              height={100}
            />
            <span className="icon-hover">
              <IconEdit />
            </span>
            <Ripple color={'var(--bs-primary)'} duration={500} />
          </button>
        </OverlayTrigger>
        {syncAccount ? (
          <OverlayTrigger
            placement="right"
            overlay={<Tooltip>Sync google account</Tooltip>}
          >
            <div className="icon-sync">
              <IconCheckCircleFill />
            </div>
          </OverlayTrigger>
        ) : null}
      </div>

      <div className="caption">
        <b className="name">
          {data.username.value.length ? data.username.value : 'John Doe'}
        </b>
        {data.bio.value.length ? (
          <span className="bio">{data.bio.value}</span>
        ) : null}
        <span className="job">{chrome.i18n.getMessage(data.job.value)}</span>
      </div>

      <Button
        className="user-edit-btn"
        variant="outline-primary"
        onClick={() => onChangeTab('USER_DATA')}
      >
        <IconEdit />
        {chrome.i18n.getMessage('userDataEdit')}
      </Button>
    </div>
  );
};

export default ProfileHeader;
