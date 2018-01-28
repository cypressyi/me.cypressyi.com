import React from 'react';
import { Row, Col } from 'antd';

function Eduction(props) {
  return (
    <Row>
      <Col span={24}>
        <h2>Education</h2>
        <div>{props.educationData.institution} <span className="job-date">{props.educationData.startDate} ~ {props.educationData.endDate}</span></div>
      </Col>
    </Row>
  );
}

export default Eduction;
