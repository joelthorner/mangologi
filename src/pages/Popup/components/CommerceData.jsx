import React from 'react';
import { useSelector } from 'react-redux';

const CommerceData = () => {
  const commerceData = useSelector((state) => state.commerceData);

  return <div>{console.log(commerceData)}</div>;
};

export default CommerceData;
