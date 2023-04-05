import React from 'react';
import Markdown from 'markdown-to-jsx';
import changelog from '../../../../data/CHANGELOG.md';

const PageChangelog = () => {
  return (
    <div>
      GHola
      <Markdown>{changelog}</Markdown>
    </div>
  );
};

export default PageChangelog;
