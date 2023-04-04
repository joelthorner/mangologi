import React from 'react';
import { useSelector } from 'react-redux';
import OptionContentHeader from './common/OptionContentHeader';
import Content from '../components/Content';
import ExtraChromeSyncData from '../../../data/extraChromeSyncData.json';
import ActiveSwitch from './common/ActiveSwitch';

const KEY = 'scrollToDump';

const ScrollToDump = () => {
  const extraData = ExtraChromeSyncData.scrollToDump;
  const chromeSync = useSelector((state) => state.chromeSync);
  const data = chromeSync.storage.scrollToDump;

  return (
    <>
      <OptionContentHeader keyData={KEY} extraData={extraData} />
      <Content>
        <div className="default-option-content scroll-to-dump">
          <ActiveSwitch keyData={KEY} data={data} />
        </div>
      </Content>
    </>
  );
};

export default ScrollToDump;
