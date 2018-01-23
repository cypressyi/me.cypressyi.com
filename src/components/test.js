import React from 'react';
import styled from 'styled-components';
import { Timeline } from 'antd';

const Timeline2 = () => {
  <Timeline>
    <Timeline.Item>
      {123}
    </Timeline.Item>
  </Timeline>
};

const Mytimeline = styled(Timeline2)`
  font-size: 25px;
  ul,li {
    font-size: 25px;
  }
`;

export default Mytimeline;
