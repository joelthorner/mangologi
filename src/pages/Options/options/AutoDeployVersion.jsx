import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import OptionContentHeader from './common/OptionContentHeader';
import Content from '../components/Content';
import ExtraChromeSyncData from '../../../data/extraChromeSyncData.json';
import { modifyProp } from '../../../slices/chromeSyncSlice';
import ActiveSwitch from './common/ActiveSwitch';
import { Form } from 'react-bootstrap';

const KEY = 'autoDeployVersion';

const AutoDeployVersion = () => {
  const extraData = ExtraChromeSyncData.autoDeployVersion;
  const chromeSync = useSelector((state) => state.chromeSync);
  const data = chromeSync.storage.autoDeployVersion;
  const dispatch = useDispatch();

  return (
    <>
      <OptionContentHeader keyData={KEY} extraData={extraData} />
      <Content>
        <div className="default-option-content auto-deploy-version">
          <ActiveSwitch keyData={KEY} data={data} />
          <hr />
          <Form.Group
            className="mb-3"
            controlId="autoDeployVersion.defaultFormat"
          >
            <Form.Label>Default format</Form.Label>
            <Form.Select
              value={data.props.defaultFormat}
              onChange={(event) => {
                console.log(event.target.value);
                dispatch(
                  modifyProp([KEY, 'defaultFormat', event.target.value])
                );
              }}
            >
              <option value="v0.0.0">v0.0.0</option>
              <option value="0.0.0">0.0.0</option>
              <option value="0.0.0.0">0.0.0.0</option>
              <option value="v0.0.0.0">v0.0.0.0</option>
              <option disabled value="v.0.0.0">
                v.0.0.0
              </option>
            </Form.Select>
          </Form.Group>
        </div>
      </Content>
    </>
  );
};

export default AutoDeployVersion;
