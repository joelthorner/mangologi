import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { modifyProp } from '../../../../slices/chromeSyncSlice';

import Card from 'react-bootstrap/Card';
import Content from '../../components/Content';

const PageHome = () => {
  const dispatch = useDispatch();
  const chromeSync = useSelector((state) => state.chromeSync);
  // const [autoDeployVersion, setAutoDeployVersion] = useState('2');

  // const dispatch = useDispatch();
  // const [incrementAmount, setIncrementAmount] = useState('2');

  return (
    <Content>
      <div className="grid">
        chromeSync.storage.autoDeployVersion.props.active:{' '}
        {chromeSync.storage.autoDeployVersion.props.active ? '1' : '0'}
        <button
          onClick={() =>
            dispatch(
              modifyProp([
                'autoDeployVersion',
                'active',
                !chromeSync.storage.autoDeployVersion.props.active,
              ])
            )
          }
        ></button>
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
