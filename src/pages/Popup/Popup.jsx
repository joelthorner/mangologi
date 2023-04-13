import React from 'react';
import Header from './components/Header';
import NavTabs from './components/NavTabs';
import CommerceData from './components/CommerceData';

const Popup = () => {
  return (
    <div id="popup">
      <Header />
      <NavTabs />
      <CommerceData />
    </div>
  );
};

export default Popup;
