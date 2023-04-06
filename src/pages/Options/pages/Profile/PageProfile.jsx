import React from 'react';
import { useSelector } from 'react-redux';
import ContentHeader from '../../components/ContentHeader';
import Content from '../../components/Content';
import ProfileHeader from '../../components/ProfileHeader';

const PageProfile = () => {
  const chromeSync = useSelector((state) => state.chromeSync);

  return (
    <>
      <ContentHeader title="Profile" />
      <Content>
        <div className="profile-content">
          <ProfileHeader data={chromeSync.storage.profile}></ProfileHeader>
        </div>
      </Content>
    </>
  );
};

export default PageProfile;
