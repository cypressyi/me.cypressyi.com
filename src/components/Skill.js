import React from 'react';
import { Row, Col } from 'antd';

function Skill() {
  return (
    <Row>
      <Col span={24}>
        <h2>Summary of skills</h2>
        <ul className="job-description">
          <li>HTML、CSS、Javascript、PHP</li>
          <li>SASS、NPM、Webpack、Git</li>
          <li>Wordpress、React</li>
          <li>對於網站前後端運作皆有基本認知，有過從零獨立開發並架設網站的經驗</li>
          <li>SEO 優化相關經驗，熟習 Google Analytics、Search Console 等工具</li>
        </ul>
      </Col>
    </Row>
  );
}

export default Skill;
