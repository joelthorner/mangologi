import React from 'react';

const ContentHeader = ({ title, heading = 'h2' }) => {
  return (
    <div className="content-header">
      <div className={heading}>{title}</div>
    </div>
  );
};

export default ContentHeader;
