import React from 'react';
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import ReactTimeAgo from 'react-time-ago';

const PostCard = ({ post }) => {
  const date = new Date(post.date);

  return (
    <Card>
      <Link to={`/blog/${post.id}`}>
        <Card.Img variant="top" src={chrome.runtime.getURL(post.image)} />
      </Link>
      <Card.Body>
        <Card.Title as="div">
          <Link to={`/blog/${post.id}`}>{post.name}</Link>
        </Card.Title>
        <Card.Text>{post.shortContent}</Card.Text>
      </Card.Body>
      <Card.Footer>
        <div className="date">
          <ReactTimeAgo date={date} locale="en-US" />
        </div>
        <Link to={`/blog/${post.id}`}>
          {chrome.i18n.getMessage(`readMorePost`)}
        </Link>
      </Card.Footer>
    </Card>
  );
};

export default PostCard;
