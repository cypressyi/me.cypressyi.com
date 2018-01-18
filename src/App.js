// import { Grid } from 'semantic-ui-react';
import React from 'react';
import styled, { injectGlobal } from 'styled-components';
import { Row, Col } from 'antd';
// import './App.css';

injectGlobal`
  body {
    height: 100%;
    width: 100%;
    background-color: #bcdee7;
  }
`;

const Container = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap:wrap;
`;

const Wrapper = styled.div`
  margin-top: 80px;
  margin-bottom: 80px;
  width: 100%;
  max-width: 992px;
  min-height: 1000px;
  background-color: #ffffff;
  border-radius: 5px;
  box-shadow: 0px 6px 6px rgba(0,0,0,0.16), 0px 6px 6px rgba(0,0,0,0.23);
  padding: 50px 50px;
`;

const App = () => {
  return (
    <Container>
      <Wrapper>
      123
      </Wrapper>
    </Container>
  );
};
export default App;
