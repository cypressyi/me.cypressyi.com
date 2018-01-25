// import { Grid } from 'semantic-ui-react';
import React from 'react';
import { Divider } from 'antd';
import ReactGA from 'react-ga';
import './App.css';
import Profile from './components/Profile';
import Summary from './components/Summary';
import Skill from './components/Skill';
import Experience from './components/Experience';
import Education from './components/Education';
import Portfolio from './components/Portfolio';

ReactGA.initialize('UA-93114522-4');
ReactGA.pageview(window.location.pathname + window.location.search);

const App = () => {
  return (
    <div className="container">
      <div className="wrapper">
        <Profile />
        <Divider />
        <Summary />
        <Skill />
        <Experience />
        <Education />
        <Divider />
        <Portfolio />
      </div>
    </div>
  );
};

export default App;
