import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
// import {
//   getChromeSync,
//   getChromeSyncDataAsync,
// } from '../../../../utils/chromeSyncSlice';

import Card from 'react-bootstrap/Card';
import Content from '../../components/Content';

const PageHome = () => {
  // const chromeSyncData = useSelector(getChromeSync);
  const chromeSync = useSelector((state) => state.chromeSync);

  // const dispatch = useDispatch();
  // const [incrementAmount, setIncrementAmount] = useState('2');

  return (
    <Content>
      {/* <button onClick={() => dispatch(getChromeSyncDataAsync())}>
          Add Async
        </button> */}

      {console.log(chromeSync)}
      <div className="grid">
        <Card>
          <Card.Body>This is some text within a card body.</Card.Body>
        </Card>
        <Card>
          <Card.Body>This is some text within a card body.</Card.Body>
        </Card>
        <Card>
          <Card.Body>This is some text within a card body.</Card.Body>
        </Card>
        <Card>
          <Card.Body>This is some text within a card body.</Card.Body>
        </Card>
        <Card>
          <Card.Body>This is some text within a card body.</Card.Body>
        </Card>
      </div>
    </Content>
  );
};

export default PageHome;
