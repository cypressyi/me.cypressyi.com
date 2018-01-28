import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import resumeJson from './resume.json';

ReactDOM.render(<App resumeData={resumeJson} />, document.getElementById('root'));

registerServiceWorker();
