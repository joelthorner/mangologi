import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import ContentHeader from '../../components/ContentHeader';
import Content from '../../components/Content';
import ProfileHeader from '../../components/ProfileHeader';

const PageProfile = () => {
  const chromeSync = useSelector((state) => state.chromeSync);
  const [tab, setTab] = useState('');

  return (
    <>
      <ContentHeader title="Profile" />
      <Content>
        <div className="profile-content">
          <ProfileHeader
            data={chromeSync.storage.profile}
            onChangeTab={setTab}
          ></ProfileHeader>

          {tab === 'AVATAR' ? <TabAvatar /> : null}
          {tab === 'USER_DATA' ? <TabUserData /> : null}
        </div>
      </Content>
    </>
  );
};

const TabAvatar = ({ tab }) => {
  return <div>TabAvatar</div>;
};

const TabUserData = ({ tab }) => {
  return <div>TabUserData</div>;
};

export default PageProfile;
