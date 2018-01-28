import React from 'react';
import { Row, Col, Icon } from 'antd';

function Profile(props) {
  return (
    <Row>
      <Col span={24}>
        <h1>{props.profileData.name}</h1>
        <h2>{props.profileData.label}</h2>
        <div className="contact">
          <div>
            <Icon type="mobile" /> {props.profileData.email}
          </div>
          <div>
            <Icon type="mail" /> {props.profileData.phone}
          </div>
        </div>
      </Col>
    </Row>
  );
}

export default Profile;
