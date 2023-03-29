import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import Nav from 'react-bootstrap/Nav';

import ExtraChromeSyncData from '../../../../data/extraChromeSyncData.json';
import { getOrderedKeys } from '../../../../utils/chromeDataUtils';

import Content from '../../components/Content';
import ContentHeader from '../../components/ContentHeader';
import OptionCard from '../../components/OptionCard';

const FILTER_ALL = 'ALL';
const FILTER_LOGICOMMERCE = 'LOGICOMMERCE';
const FILTER_DEVTOOLS = 'DEVTOOLS';
const FILTERS = [FILTER_ALL, FILTER_LOGICOMMERCE, FILTER_DEVTOOLS];

const PageOptions = () => {
  const chromeSync = useSelector((state) => state.chromeSync);
  const [filter, setFilter] = useState(FILTER_ALL);

  const cards = getOrderedKeys(ExtraChromeSyncData).map((key) => {
    const extraData = ExtraChromeSyncData[key];
    const data = chromeSync.storage[key];
    const showCard = filter === FILTER_ALL || filter === extraData.category;

    return showCard ? (
      <OptionCard key={key} keyData={key} data={data} extraData={extraData} />
    ) : null;
  });

  return (
    <>
      <ContentHeader title="Options">
        <Nav
          defaultActiveKey="ALL"
          as="ul"
          onSelect={(eventKey, event) => setFilter(eventKey)}
        >
          {FILTERS.map((filter) => (
            <Nav.Item as="li">
              <Nav.Link eventKey={filter}>
                {chrome.i18n.getMessage(`option_filter_${filter}`)}
              </Nav.Link>
            </Nav.Item>
          ))}
        </Nav>
      </ContentHeader>
      <Content>
        <div className="grid">{cards}</div>
      </Content>
    </>
  );
};

export default PageOptions;
