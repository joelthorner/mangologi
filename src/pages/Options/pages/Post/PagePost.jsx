import React from 'react';
import { useParams } from 'react-router';

const PagePost = () => {
  const { postId } = useParams();
  return <div>hola {postId}</div>;
};

export default PagePost;
