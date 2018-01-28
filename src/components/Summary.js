import React from 'react';
import { Row, Col } from 'antd';

function Summary(props) {
  return (
    <Row>
      <Col span={24}>
        <h2>Summary</h2>
        <p>{props.summaryData}</p>
      </Col>
    </Row>
  );
}

export default Summary;
