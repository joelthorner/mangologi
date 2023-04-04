import React from 'react';
import { useParams } from 'react-router';
import { posts } from '../../../../data/postsData';
import ContentHeader from '../../components/ContentHeader';
import Content from '../../components/Content';
import ReactMarkdown from 'react-markdown';
import { CloseButton } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import ReactTimeAgo from 'react-time-ago';

const PagePost = () => {
  const { postId } = useParams();
  let postData = null;
  let intPostId = parseInt(postId);

  if (isNaN(intPostId)) return 'Error';

  posts.forEach((post) => {
    if (post.id === intPostId) {
      postData = post;
      return;
    }
  });

  if (postData === null) return 'Error';

  const date = new Date(postData.date);

  return (
    <>
      <ContentHeader title={postData.name}>
        <Link className="close-button-link" to="/blog/">
          <CloseButton />
        </Link>
      </ContentHeader>
      <Content>
        <div className="blog-post-content">
          <div className="img">
            <img
              src={chrome.runtime.getURL(postData.image)}
              alt={postData.name}
            />
            <ReactTimeAgo date={date} locale="en-US" />
          </div>
          <div className="content-post">
            <ReactMarkdown children={postData.content}></ReactMarkdown>
          </div>
        </div>
      </Content>
    </>
  );
};

export default PagePost;
