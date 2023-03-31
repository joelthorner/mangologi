import React from 'react';

const ContentHeader = ({
  children,
  title = '',
  heading = 'h2',
  className = '',
}) => {
  return (
    <div className={'content-header' + (className ? ' ' + className : '')}>
      {title.length ? <div className={heading}>{title}</div> : null}
      {children}
    </div>
  );
};

export default ContentHeader;
