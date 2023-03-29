import React from 'react';

const ContentHeader = ({ children, title, heading = 'h2' }) => {
  return (
    <div className="content-header">
      <div className={heading}>{title}</div>
      {children}
    </div>
  );
};

export default ContentHeader;
