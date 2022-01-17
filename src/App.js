import 'antd/dist/antd.css';
import './App.css';

import React from 'react';
import {
  BrowserRouter,
  Switch,
  Route,
} from "react-router-dom";


import { useLocation } from "react-router-dom";


import {default as KDDNavigator} from './components/KDDNavigator';
import {default as KDDHome} from './pages/KDD/home';
import {default as KDDTimeline} from './pages/KDD/timeline';
import {default as KDDOrganizers} from './pages/KDD/organizers';
import {default as KDDSpeakers} from './pages/KDD/speakers';
import {default as KDDSubmission} from './pages/KDD/submission';
import {default as KDDProgram} from './pages/KDD/program';

import {default as IJCNNNavigator} from './components/IJCNNNavigator';
import {default as IJCNNHome} from './pages/IJCNN/home';
import {default as IJCNNTimeline} from './pages/IJCNN/timeline';
import {default as IJCNNOrganizers} from './pages/IJCNN/organizers';
import {default as IJCNNSpeakers} from './pages/IJCNN/speakers';
import {default as IJCNNSubmission} from './pages/IJCNN/submission';
import {default as IJCNNProgram} from './pages/IJCNN/program';


import { Layout } from 'antd';
const { Content } = Layout;


function KDDSwitch() {
  return <Switch>
            <Route path="/kdd/organizers" component={KDDOrganizers} />
            <Route path="/kdd/timeline" component={KDDTimeline} />
            <Route path="/kdd/speakers" component={KDDSpeakers} />
            <Route path="/kdd/submission" component={KDDSubmission} />
            <Route path="/kdd/program" component={KDDProgram} />
            <Route path="/kdd/home" component={KDDHome} /> 
        </Switch>
}


function IJCNNSwitch() {
  return <Switch>
            <Route path="/ijcnn/organizers" component={IJCNNOrganizers} />
            <Route path="/ijcnn/timeline" component={IJCNNTimeline} />
            {/* <Route path="/ijcnn/speakers" component={IJCNNSpeakers} /> */}
            {/* <Route path="/ijcnn/submission" component={IJCNNSubmission} /> */}
            {/* <Route path="/ijcnn/program" component={IJCNNProgram} /> */}
            <Route path="/ijcnn/home" component={IJCNNHome} />  
            <Route path="/" component={IJCNNHome} />  
        </Switch>
}


function AutoNavigator() {
  const location = useLocation();
  if (location.pathname === '/' || location.pathname.includes("ijcnn") ) {
    return <IJCNNNavigator />
  }
  else {
    return <KDDNavigator />
  }
}

function AutoSwitch() {
  const location = useLocation();
  if (location.pathname === '/' || location.pathname.includes("ijcnn") ) {
    return <IJCNNSwitch />
  }
  else {
    return <KDDSwitch />
  }
}

function AutoContent() {
  const location = useLocation();

  const overlayChoice = {
    "kdd" : "kddImageOverlay",
    "ijcnn" : "ijcnnImageOverlay",
  }

  const firstTitleChoice = {
    "kdd" : "KDD Workshop 2021",
    "ijcnn" : "IJCNN Special Session on"
  }

  const secondTitleChoice = {
    "kdd" : "Model Mining",
    "ijcnn" : "Knowledge Mining from Pretrained Neural Networks"
  }

  var currentEvent = 'kdd';
  if (location.pathname === '/' || location.pathname.includes("ijcnn") ) {
    currentEvent = "ijcnn";
  }
  else {
    currentEvent =  "kdd";
  }

  

  return <Layout className="layout">
          <AutoNavigator />
          <Content >
            <div className={overlayChoice[currentEvent]}>
              <h1 style={{ textAlign: "center", color: "white", position: "relative" }}>
                {firstTitleChoice[currentEvent]} <br /> {secondTitleChoice[currentEvent]}
              </h1>
            </div>
            
            <div style={{ padding: '0 50px', marginTop: 30, marginBottom: 20, minHeight: 500 }}>
              <AutoSwitch />
            </div>
          </Content>
        </Layout>
}


function App() {
  return (
    <BrowserRouter>
      <AutoContent />
    </BrowserRouter>
  );
}



export default App;
