import React from 'react';
import { useSelector } from 'react-redux';
import OptionContentHeader from './common/OptionContentHeader';
import Content from '../components/Content';
import ExtraChromeSyncData from '../../../data/extraChromeSyncData.json';
import ActiveSwitch from './common/ActiveSwitch';

const KEY = 'lcDeveloperBar';

const LcDeveloperBar = () => {
  const extraData = ExtraChromeSyncData.lcDeveloperBar;
  const chromeSync = useSelector((state) => state.chromeSync);
  const data = chromeSync.storage.lcDeveloperBar;

  return (
    <>
      <OptionContentHeader keyData={KEY} extraData={extraData} />
      <Content>
        <div className="default-option-content lc-developer-bar">
          <ActiveSwitch keyData={KEY} data={data} />
        </div>
      </Content>
    </>
  );
};

export default LcDeveloperBar;
