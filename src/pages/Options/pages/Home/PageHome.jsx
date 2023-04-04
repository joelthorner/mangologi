import React from 'react';
import { useSelector } from 'react-redux';
import ExtraChromeSyncData from '../../../../data/extraChromeSyncData.json';
import { posts } from '../../../../data/postsData';
import Content from '../../components/Content';
import OptionCard from '../../components/OptionCard';
import ContentHeader from '../../components/ContentHeader';
import PostCard from '../../components/PostCard';
import { getRandomKeys } from '../../../../utils/chromeDataUtils';

const PageHome = () => {
  const chromeSync = useSelector((state) => state.chromeSync);

  const cards = getRandomKeys(ExtraChromeSyncData, 4).map((key) => {
    const extraData = ExtraChromeSyncData[key];
    const data = chromeSync.storage[key];

    return (
      <OptionCard key={key} keyData={key} data={data} extraData={extraData} />
    );
  });

  const lastPosts = posts.slice(0, 4).map((post) => {
    return <PostCard key={`home-post-${post.id}`} post={post} />;
  });

  return (
    <>
      <ContentHeader
        title={chrome.i18n.getMessage(`homeTitleNews`)}
      ></ContentHeader>
      <Content>
        <div className="grid grid-home">{lastPosts}</div>
      </Content>
      <ContentHeader
        title={chrome.i18n.getMessage(`homeTitleFeatured`)}
      ></ContentHeader>
      <Content>
        <div className="grid grid-home">{cards}</div>
      </Content>
    </>
  );
};

export default PageHome;
