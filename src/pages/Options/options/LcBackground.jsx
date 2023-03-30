import React from 'react';
import { useSelector } from 'react-redux';
import Form from 'react-bootstrap/Form';
import Content from '../components/Content';
import ExtraChromeSyncData from '../../../data/extraChromeSyncData.json';
import OptionContentHeader from './common/OptionContentHeader';
import ActiveSwitch from './common/ActiveSwitch';
import Collections from './lcBackground/Collections';
import SelectedBg from './lcBackground/SelectedBg';

const KEY = 'lcBackground';

const LcBackground = () => {
  const chromeSync = useSelector((state) => state.chromeSync);
  const extraData = ExtraChromeSyncData[KEY];
  const data = chromeSync.storage[KEY];

  return (
    <>
      <OptionContentHeader keyData={KEY} extraData={extraData} />
      <Content>
        <ActiveSwitch keyData={KEY} data={data} />

        <div className="lc-background-content">
          <div className="col">
            <Form.Control
              type="search"
              placeholder={chrome.i18n.getMessage(`searchPlaceholder`)}
            />
            <SelectedBg keyData={KEY} data={data} />
            <Collections />
          </div>
          <div className="col-content">
            <div className="grid-background-items"></div>
          </div>
        </div>
      </Content>
    </>
  );
};

export default LcBackground;
