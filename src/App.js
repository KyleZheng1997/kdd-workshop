import 'antd/dist/antd.css';
import './App.css';

import React from 'react';
import {
  BrowserRouter,
  Switch,
  Route,
} from "react-router-dom";


import {
  useLocation,
  Link,
} from "react-router-dom";


import {default as KDDNavigator} from './components/KDDNavigator';
import {default as KDDHome} from './pages/KDD/home';
import {default as KDDTimeline} from './pages/KDD/timeline';
import {default as KDDOrganizers} from './pages/KDD/organizers';
import {default as KDDSpeakers} from './pages/KDD/speakers';
import {default as KDDSubmission} from './pages/KDD/submission';
import {default as KDDProgram} from './pages/KDD/program';

import {default as  IJCNNNavigator} from './components/IJCNNNavigator';

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
            <Route path="/" component={KDDHome} />  
        </Switch>
}


function App() {
  
  // const location = useLocation();
  

  return (
    <BrowserRouter>

      <Layout className="layout">


        <KDDNavigator />
        <Content >
          <div className="imageOverlay">
            <h1 style={{ textAlign: "center", color: "white", position: "relative" }}>
              KDD Workshop 2021 <br />
              Model Mining
            </h1>
          </div>
          
          <div style={{ padding: '0 50px', marginTop: 30, marginBottom: 20, minHeight: 500 }}>
            <KDDSwitch />
          </div>

        </Content>
      </Layout>
    </BrowserRouter>
  );
}



export default App;
