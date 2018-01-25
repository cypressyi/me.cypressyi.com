import React from 'react';
import { Row, Col, Icon } from 'antd';

function Profile() {
  return (
    <Row>
      <Col span={24}>
        <h1>邱毅柏</h1>
        <h2>Web developer</h2>
        <div className="contact">
          <div>
            <Icon type="mobile" /> 0935-828-026
          </div>
          <div>
            <Icon type="mail" /> cypressyi1990@gmail.com
          </div>
        </div>
      </Col>
    </Row>
  );
}

export default Profile;
