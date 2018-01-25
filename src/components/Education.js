import React from 'react';
import { Row, Col } from 'antd';

function Eduction() {
  return (
    <Row>
      <Col span={24}>
        <h2>Education</h2>
        <div>中國文化大學, 資訊工程學系 <span className="job-date">2011/09 ~ 2014/06</span></div>
      </Col>
    </Row>
  );
}

export default Eduction;
