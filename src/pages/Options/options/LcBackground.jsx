import React from 'react';
import { useSelector } from 'react-redux';

import Content from '../components/Content';

import ExtraChromeSyncData from '../../../data/extraChromeSyncData.json';
import OptionContentHeader from './common/OptionContentHeader';
import ActiveSwitch from './common/ActiveSwitch';

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
      </Content>
    </>
  );
};

export default LcBackground;
