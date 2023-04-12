import React from 'react';
import { useSelector } from 'react-redux';

const Header = () => {
  const chromeSync = useSelector((state) => state.chromeSync);

  return (
    <div className="header">
      <a
        href={chrome.runtime.getURL('options.html') + '#/user/avatar'}
        title="Edit avatar"
        target="_blank"
        className="avatar"
        rel="noreferrer"
      >
        <img
          src={chromeSync.store.profile.avatar.value}
          alt={chromeSync.store.profile.avatar.value}
        />
        <span className="icon hover" v-html="penIcon"></span>
        <div className="rippleJS"></div>
      </a>
      <div className="titles">
        <b className="title">Mangologi</b>
        <span className="user">
          Welcome,{' '}
          <span className="user-name">
            {chromeSync.store.profile.username.value}
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
        {/* <span v-html="settingsIcon"></span> */}
        {/* <div className="rippleJS"></div> */}
      </a>
    </div>
  );
};

export default Header;
