import React from 'react';
import { IconCheckCircleFill, IconEdit } from './Icons';
import Ripple from '../components/Ripple/Ripple';
import { Button } from 'react-bootstrap';

const ProfileHeader = ({ data, onChangeTab }) => {
  return (
    <div className="profile-header">
      <div className="image">
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
        <IconCheckCircleFill />
      </div>

      <div className="caption">
        <span className="name">
          {data.username.value.length ? data.username.value : 'John Doe'}
        </span>
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
