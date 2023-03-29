import React from 'react';
import { useSelector } from 'react-redux';

import ExtraChromeSyncData from '../../../../data/extraChromeSyncData.json';
import { getOrderedKeys } from '../../../../utils/chromeDataUtils';

import Content from '../../components/Content';
import ContentHeader from '../../components/ContentHeader';
import OptionCard from '../../components/OptionCard';

const PageOptions = () => {
  const chromeSync = useSelector((state) => state.chromeSync);

  const cards = getOrderedKeys(ExtraChromeSyncData).map((key) => {
    const extraData = ExtraChromeSyncData[key];
    const data = chromeSync.storage[key];

    return (
      <OptionCard key={key} keyData={key} data={data} extraData={extraData} />
    );
  });

  return (
    <>
      <ContentHeader title="Options" />
      <Content>
        <div className="grid">{cards}</div>
      </Content>
    </>
  );
};

export default PageOptions;
