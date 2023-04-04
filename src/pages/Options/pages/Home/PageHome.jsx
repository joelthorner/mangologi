import React from 'react';
import { useSelector } from 'react-redux';
import ExtraChromeSyncData from '../../../../data/extraChromeSyncData.json';
import { posts } from '../../../../data/postsData';
import Content from '../../components/Content';
import OptionCard from '../../components/OptionCard';
import ContentHeader from '../../components/ContentHeader';
import PostCard from '../../components/PostCard';

const PageHome = () => {
  const chromeSync = useSelector((state) => state.chromeSync);

  const cards = ['lcBackground', 'trackersCodeEditor', 'linkedGitIssues'].map(
    (key) => {
      const extraData = ExtraChromeSyncData[key];
      const data = chromeSync.storage[key];

      return (
        <OptionCard key={key} keyData={key} data={data} extraData={extraData} />
      );
    }
  );

  const lastPosts = posts.slice(0, 3).map((post) => {
    return <PostCard key={`home-post-${post.id}`} post={post} />;
  });

  return (
    <>
      <ContentHeader title="News"></ContentHeader>
      <Content>
        <div className="grid">{lastPosts}</div>
      </Content>
      <ContentHeader title="Featured"></ContentHeader>
      <Content>
        <div className="grid">{cards}</div>
      </Content>
    </>
  );
};

export default PageHome;
