import 'antd/dist/antd.css';
import './App.css';

import React from 'react';
import {
  HashRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import Navigator from './components/navigator';
import Home from './pages/home';
import Timeline from './pages/timeline';
import Organizers from './pages/organizers';
import Speakers from './pages/speakers';

import { Layout } from 'antd';
const { Content } = Layout;



function App() {
  return (
    <Router>
      <Layout className="layout">
        <Navigator />
        <Content >
          <div className="imageOverlay">
            <h1 style={{ textAlign: "center", color: "white", position: "relative" }}>
              KDD Workshop 2021 <br />
              Model Mining
            </h1>
          </div>

          <div style={{ padding: '0 50px', marginTop: 30, marginBottom: 20, minHeight: 500 }}>
            <Switch>
              <Route path="/organizers" component={Organizers} />
              <Route path="/timeline" component={Timeline} />
              <Route path="/speakers" component={Speakers} />
              <Route path="/" component={Home} />
            </Switch>
          </div>
        </Content>
      </Layout>
    </Router>
  );
}

export default App;
