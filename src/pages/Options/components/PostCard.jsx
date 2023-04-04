import React from 'react';
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import ReactTimeAgo from 'react-time-ago';

const PostCard = ({ post }) => {
  return (
    <Card>
      <Link to={`/post/${post.id}`}>
        <Card.Img variant="top" src={chrome.runtime.getURL(post.image)} />
      </Link>
      <Card.Body>
        <Card.Title as="div">
          <Link to={`/post/${post.id}`}>{post.name}</Link>
        </Card.Title>
        <Card.Text>{post.shortContent}</Card.Text>
      </Card.Body>
      <Card.Footer>
        <div className="date">
          <ReactTimeAgo date={new Date(post.date)} locale="en-US" />
        </div>
      </Card.Footer>
    </Card>
  );
};

export default PostCard;
