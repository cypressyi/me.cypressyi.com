// import { Grid } from 'semantic-ui-react';
import React from 'react';
import { Divider } from 'antd';
import './App.css';
import Profile from './components/Profile';
import Summary from './components/Summary';
import Skill from './components/Skill';
import Experience from './components/Experience';
import Education from './components/Education';
import Portfolio from './components/Portfolio';

const App = (props) => {
  const {
    profile,
    summary,
    skill,
    experience,
    education,
    portfolio,
  } = props.resumeData;

  return (
    <div className="container">
      <div className="wrapper">
        <Profile profileData={profile} />
        <Divider />
        <Summary summaryData={summary} />
        <Skill skillData={skill} />
        <Experience experienceData={experience} />
        <Education educationData={education} />
        <Divider />
        <Portfolio portfolioData={portfolio} />
      </div>
    </div>
  );
};

export default App;
