import React from 'react';
import { useSelector } from 'react-redux';
import OptionContentHeader from './common/OptionContentHeader';
import Content from '../components/Content';
import ExtraChromeSyncData from '../../../data/extraChromeSyncData.json';
import ActiveSwitch from './common/ActiveSwitch';

const KEY = 'sandboxSelectorBtns';

const SandboxSelectorBtns = () => {
  const extraData = ExtraChromeSyncData.sandboxSelectorBtns;
  const chromeSync = useSelector((state) => state.chromeSync);
  const data = chromeSync.storage.sandboxSelectorBtns;

  return (
    <>
      <OptionContentHeader keyData={KEY} extraData={extraData} />
      <Content>
        <div className="default-option-content sandbox-selector-btns">
          <ActiveSwitch keyData={KEY} data={data} />
        </div>
      </Content>
    </>
  );
};

export default SandboxSelectorBtns;
