import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ContentHeader from '../../components/ContentHeader';
import Content from '../../components/Content';
import ProfileHeader from '../../components/ProfileHeader';
import { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import { reset } from '../../../../slices/chromeSyncSlice';
import { IconAlert } from '../../../../components/Icons';

const PageProfile = () => {
  const chromeSync = useSelector((state) => state.chromeSync);
  const [modalShow, setModalShow] = useState(false);

  return (
    <>
      <ContentHeader title="Profile" />
      <Content>
        <div className="content-profile">
          <div className="profile-content">
            <ProfileHeader data={chromeSync.storage.profile}></ProfileHeader>
          </div>
          {chromeSync.storage.profile.username.value === 'joelthorner' ? (
            <pre>{JSON.stringify(chromeSync.storage, null, 2)}</pre>
          ) : null}
          <div className="reset-data-container">
            <Button variant="outline-danger" onClick={() => setModalShow(true)}>
              Reset data
            </Button>

            <ResetDataMoal
              show={modalShow}
              onHide={() => setModalShow(false)}
            />
          </div>
        </div>
      </Content>
    </>
  );
};

const ResetDataMoal = (props) => {
  const dispatch = useDispatch();

  return (
    <Modal
      {...props}
      size="sm"
      aria-labelledby="reset-data-modal"
      centered
      className="reset-data-modal"
    >
      <Modal.Body>
        <div className="text-center">
          <h4>Reset all options to default values</h4>
          <IconAlert className="icon" />
          <p>All stored user data and options will be deleted.</p>
          <Button
            variant="outline-primary"
            onClick={() => {
              props.onHide();
            }}
          >
            Cancel
          </Button>
          <Button
            variant="primary"
            onClick={() => {
              props.onHide();
              dispatch(reset());
            }}
          >
            Reset
          </Button>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default PageProfile;
