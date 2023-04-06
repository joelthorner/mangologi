import React, { useState } from 'react';
import { IconCheckCircleFill, IconEdit } from './Icons';
import Ripple from '../components/Ripple/Ripple';
import { OverlayTrigger, Tooltip } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const ProfileHeader = ({ data }) => {
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
          <Link to="/profile/avatar" className="circle">
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
          </Link>
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
        <span className="job">{chrome.i18n.getMessage(data.job.value)}</span>
        {data.bio.value.length ? (
          <span className="bio">{data.bio.value}</span>
        ) : null}
      </div>

      <Link
        to="/profile/userData"
        className="user-edit-btn btn btn-outline-primary"
      >
        <IconEdit />
        {chrome.i18n.getMessage('userDataEdit')}
      </Link>
    </div>
  );
};

export default ProfileHeader;
