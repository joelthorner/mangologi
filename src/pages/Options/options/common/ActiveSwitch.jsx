import React from 'react';
import Form from 'react-bootstrap/Form';
import { useDispatch } from 'react-redux';
import { modifyProp } from '../../../../slices/chromeSyncSlice';

const ActiveSwitch = ({ keyData, data }) => {
  const dispatch = useDispatch();
  return (
    <Form.Check
      type="switch"
      id={`active-switch-${keyData}`}
      checked={data.props.active}
      onChange={() => {
        dispatch(modifyProp([keyData, 'active', !data.props.active]));
      }}
      label={
        data.props.active
          ? chrome.i18n.getMessage(`disable`)
          : chrome.i18n.getMessage(`enable`)
      }
    />
  );
};

export default ActiveSwitch;
