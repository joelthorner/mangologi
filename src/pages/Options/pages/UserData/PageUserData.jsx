import React from 'react';
import ContentHeader from '../../components/ContentHeader';
import Content from '../../components/Content';
import ProfileHeader from '../../components/ProfileHeader';
import { useDispatch, useSelector } from 'react-redux';
import { modifyProfileData } from '../../../../slices/chromeSyncSlice';
import { debounce } from 'lodash';
import { Form } from 'react-bootstrap';

const PageUserData = () => {
  const chromeSync = useSelector((state) => state.chromeSync);
  const dispatch = useDispatch();

  const onChangeUsername = (event) => {
    dispatch(
      modifyProfileData({
        key: 'username',
        data: {
          value: event.target.value,
        },
      })
    );
  };
  const onChangeBio = (event) => {
    dispatch(
      modifyProfileData({
        key: 'bio',
        data: {
          value: event.target.value,
        },
      })
    );
  };
  const d_OnChangeUsername = debounce(onChangeUsername, 1000);
  const d_OnChangeBio = debounce(onChangeBio, 1000);

  return (
    <>
      <ContentHeader title="Profile" />
      <Content>
        <ProfileHeader data={chromeSync.storage.profile}></ProfileHeader>
        <div className="user-data-container">
          <Form.Group className="mb-3" controlId="profile.username">
            <Form.Label>Username</Form.Label>
            <Form.Control
              type="text"
              placeholder="Username"
              defaultValue={chromeSync.storage.profile.username.value}
              onChange={d_OnChangeUsername}
              maxLength={40}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="profile.bio">
            <Form.Label>Bio</Form.Label>
            <Form.Control
              as="textarea"
              defaultValue={chromeSync.storage.profile.bio.value}
              onChange={d_OnChangeBio}
              rows={4}
              maxLength={150}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="profile.job">
            <Form.Label>Job</Form.Label>
            <Form.Select
              defaultValue={chromeSync.storage.profile.job.value}
              onChange={(event) => {
                dispatch(
                  modifyProfileData({
                    key: 'job',
                    data: {
                      value: event.target.value,
                    },
                  })
                );
              }}
            >
              {[
                'WEB_DEVELOPER',
                'MARKETING',
                'PROJECT_MANAGER',
                'IM_SCARED',
              ].map((job) => (
                <option value={job}>{chrome.i18n.getMessage(job)}</option>
              ))}
            </Form.Select>
          </Form.Group>
        </div>
      </Content>
    </>
  );
};

export default PageUserData;
