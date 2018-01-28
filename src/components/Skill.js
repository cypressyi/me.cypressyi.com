import React from 'react';
import { Row, Col } from 'antd';

function Skill(props) {
  return (
    <Row>
      <Col span={24}>
        <h2>Summary of skills</h2>
        <ul className="job-description">
          {
            props.skillData.map((skill, index) => {
              return (
                <li key={index}>{skill}</li>
              );
            })
          }
        </ul>
      </Col>
    </Row>
  );
}

export default Skill;
