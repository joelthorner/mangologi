import React from 'react';

import Card from 'react-bootstrap/Card';
import Content from '../../components/Content';

const PageHome = () => {
  return (
    <Content>
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
