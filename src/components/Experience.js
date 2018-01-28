import React from 'react';
import { Row, Col, Timeline } from 'antd';

function Experience(props) {
  return (
    <Row>
      <Col span={24}>
        <h2>Work experience</h2>
      </Col>
      <Col span={24}>
        <Timeline>
          {
            props.experienceData.map((work, index) => {
              return (
                <Timeline.Item>
                  <div>
                    <div className="job-title">{work.position}<span className="job-date">{work.startDate} ~ {work.endDate}</span></div>
                  </div>
                  <div className="compony-title"><a href={work.url} rel="noopener noreferrer" target="_blank">{work.name}</a></div>
                  <ul className="job-description">
                    {
                      work.highlights.map((item, index) => {
                        return (
                          <li key={index}>{item}</li>
                        );
                      })
                    }
                  </ul>
                </Timeline.Item>
              );
            })
          }
        </Timeline>
      </Col>
    </Row>
  );
}

export default Experience;
