import React from 'react';

const ContentHeader = ({ children, title = '', heading = 'h2' }) => {
  return (
    <div className="content-header">
      {title.length ? <div className={heading}>{title}</div> : null}
      {children}
    </div>
  );
};

export default ContentHeader;
