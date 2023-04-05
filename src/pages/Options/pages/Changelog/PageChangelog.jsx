import React from 'react';
import Markdown from 'markdown-to-jsx';
import changelog from '../../../../data/CHANGELOG.md';
import ContentHeader from '../../components/ContentHeader';
import Content from '../../components/Content';

const PageChangelog = () => {
  return (
    <>
      <ContentHeader title="Changelog">
        <p>{chrome.i18n.getMessage('changelog_text')}</p>
      </ContentHeader>
      <Content>
        <div className="changelog-content">
          <Markdown className="markdown">
            {changelog.replace('# Changelog', '')}
          </Markdown>
        </div>
      </Content>
    </>
  );
};

export default PageChangelog;
