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

  const onChange = (event, key) => {
    dispatch(
      modifyProfileData({
        key,
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
  const d_OnChange = debounce(onChange, 1000);

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
              onChange={(event) => d_OnChange(event, 'username')}
              maxLength={40}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="profile.bio">
            <Form.Label>Bio</Form.Label>
            <Form.Control
              as="textarea"
              defaultValue={chromeSync.storage.profile.bio.value}
              onChange={(event) => d_OnChange(event, 'bio')}
              rows={4}
              maxLength={150}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="profile.email">
            <Form.Label>Email for testing</Form.Label>
            <Form.Control
              type="text"
              placeholder="Email for testing"
              defaultValue={chromeSync.storage.profile.email.value}
              onChange={(event) => d_OnChange(event, 'email')}
              maxLength={40}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="profile.password">
            <Form.Label>Password for testing</Form.Label>
            <Form.Control
              type="text"
              placeholder="Password for testing"
              defaultValue={chromeSync.storage.profile.password.value}
              onChange={(event) => d_OnChange(event, 'password')}
              maxLength={40}
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
                <option key={`option-job-${job}`} value={job}>
                  {chrome.i18n.getMessage(job)}
                </option>
              ))}
            </Form.Select>
          </Form.Group>
        </div>
      </Content>
    </>
  );
};

export default PageUserData;
