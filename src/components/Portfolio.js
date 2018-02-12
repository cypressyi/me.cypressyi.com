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
                <Col className="portfolio-item" sm={16}>
                  <Card
                    cover={
                      <a href={item.url} rel="noopener noreferrer" target="_blank">
                        <img className="portfolio-image" src={item.cover} alt={item.name} />
                      </a>
                    }
                  >
                    <h3>{item.name}</h3>
                    {
                      item.source !== '' &&
                        <a href={item.source.path} rel="noopener noreferrer" target="_blank">{item.source.desc}</a>
                    }
                    <p>{item.desc}</p>
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
