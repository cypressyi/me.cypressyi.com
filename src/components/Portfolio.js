import React from 'react';
import { Row, Col, Card } from 'antd';

function Portfolio(props) {
  return (
    <Row>
      <Col span={24}>
        <h2>Portfolio</h2>
        <Row gutter={16}>
          {
            props.portfolioData.map((item, index) => {
              return (
                <Col className="portfolio-item" sm={24} md={12}>
                  <a href={item.url} rel="noopener noreferrer" target="_blank">
                    <Card
                      hoverable
                      cover={<img src={item.cover} alt={item.name} />}
                    >
                      <h3>{item.name}</h3>
                      <ul className="portfolio-desc">
                        {
                          item.highlights.map((item, index) => {
                            return (
                              <li key={index}>{item}</li>
                            );
                          })
                        }
                      </ul>
                    </Card>
                  </a>
                </Col>
              );
            })
          }
        </Row>
      </Col>
    </Row>
  );
}

export default Portfolio;
