import React, { useState } from 'react';
import ContentHeader from '../../components/ContentHeader';
import Content from '../../components/Content';
import { posts } from '../../../../data/postsData';
import PostCard from '../../components/PostCard';
import { Nav } from 'react-bootstrap';

const FILTER_ALL = 'ALL';

const FILTERS = [FILTER_ALL, 'FEATURES', 'RELEASES', 'V2', 'V3', 'V4'];

const PageBlog = () => {
  const [filter, setFilter] = useState(FILTER_ALL);

  const postsList = posts.map((post) => {
    const showCard = filter === FILTER_ALL || post.tags.includes(filter);
    return showCard ? (
      <PostCard key={`blog-post-${post.id}`} post={post} />
    ) : null;
  });

  return (
    <>
      <ContentHeader title="Blog">
        <Nav
          defaultActiveKey="ALL"
          as="ul"
          onSelect={(eventKey, event) => setFilter(eventKey)}
        >
          {FILTERS.map((filter) => (
            <Nav.Item as="li" key={filter}>
              <Nav.Link eventKey={filter}>
                {chrome.i18n.getMessage(`blog_filter_${filter}`)}
              </Nav.Link>
            </Nav.Item>
          ))}
        </Nav>
      </ContentHeader>
      <Content>
        <div className="grid">{postsList}</div>
      </Content>
    </>
  );
};

export default PageBlog;
