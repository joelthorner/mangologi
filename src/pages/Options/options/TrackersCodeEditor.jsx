import React from 'react';
import { useSelector } from 'react-redux';
import OptionContentHeader from './common/OptionContentHeader';
import Content from '../components/Content';
import ExtraChromeSyncData from '../../../data/extraChromeSyncData.json';
import ActiveSwitch from './common/ActiveSwitch';

const KEY = 'trackersCodeEditor';

const TrackersCodeEditor = () => {
  const extraData = ExtraChromeSyncData.trackersCodeEditor;
  const chromeSync = useSelector((state) => state.chromeSync);
  const data = chromeSync.storage.trackersCodeEditor;

  return (
    <>
      <OptionContentHeader keyData={KEY} extraData={extraData} />
      <Content>
        <div className="default-option-content trackers-code-editor">
          <ActiveSwitch keyData={KEY} data={data} />
        </div>
      </Content>
    </>
  );
};

export default TrackersCodeEditor;
