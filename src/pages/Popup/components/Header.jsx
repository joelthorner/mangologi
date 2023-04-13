import React from 'react';
import { useSelector } from 'react-redux';
import Ripple from '../../../components/Ripple/Ripple';
import { IconEdit, IconGear } from '../../../components/Icons';

const Header = () => {
  const chromeSync = useSelector((state) => state.chromeSync);

  return (
    <div className="header">
      <a
        href={chrome.runtime.getURL('options.html') + '#/profile/avatar'}
        title="Edit avatar"
        target="_blank"
        className="avatar"
        rel="noreferrer"
      >
        <img
          src={chromeSync.storage.profile.avatar.value}
          alt={chromeSync.storage.profile.avatar.value}
        />
        <span className="icon hover">
          <IconEdit />
        </span>
        <Ripple color={'var(--bs-primary)'} duration={500} />
      </a>
      <div className="titles">
        <b className="title">Mangologi</b>
        <span className="user">
          Welcome,{' '}
          <span className="user-name">
            {chromeSync.storage.profile.username.value}
          </span>
        </span>
      </div>
      <a
        href={chrome.runtime.getURL('options.html')}
        className="options-btn"
        title="Open settings"
        target="_blank"
        rel="noreferrer"
      >
        <IconGear />
        <Ripple color={'var(--bs-primary)'} duration={500} />
      </a>
    </div>
  );
};

export default Header;
