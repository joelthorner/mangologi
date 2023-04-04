import React from 'react';
import { useSelector } from 'react-redux';
import OptionContentHeader from './common/OptionContentHeader';
import Content from '../components/Content';
import ExtraChromeSyncData from '../../../data/extraChromeSyncData.json';
import ActiveSwitch from './common/ActiveSwitch';

const KEY = 'forcedForceView';

const ForcedForceView = () => {
  const extraData = ExtraChromeSyncData.forcedForceView;
  const chromeSync = useSelector((state) => state.chromeSync);
  const data = chromeSync.storage.forcedForceView;

  return (
    <>
      <OptionContentHeader keyData={KEY} extraData={extraData} />
      <Content>
        <div className="default-option-content forced-force-view">
          <ActiveSwitch keyData={KEY} data={data} />
        </div>
      </Content>
    </>
  );
};

export default ForcedForceView;
