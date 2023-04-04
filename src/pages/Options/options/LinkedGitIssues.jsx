import React from 'react';
import { useSelector } from 'react-redux';
import OptionContentHeader from './common/OptionContentHeader';
import Content from '../components/Content';
import ExtraChromeSyncData from '../../../data/extraChromeSyncData.json';
import ActiveSwitch from './common/ActiveSwitch';

const KEY = 'linkedGitIssues';

const LinkedGitIssues = () => {
  const extraData = ExtraChromeSyncData.linkedGitIssues;
  const chromeSync = useSelector((state) => state.chromeSync);
  const data = chromeSync.storage.linkedGitIssues;

  return (
    <>
      <OptionContentHeader keyData={KEY} extraData={extraData} />
      <Content>
        <div className="default-option-content linked-git-issues">
          <ActiveSwitch keyData={KEY} data={data} />
        </div>
      </Content>
    </>
  );
};

export default LinkedGitIssues;
