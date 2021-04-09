import React from 'react';
import {
  useLocation,
  Link,
} from "react-router-dom";

import { Menu } from 'antd';

const routerKey = {
  "/": "1",
  "/organizers": "2",
  "/timeline": "3",
  "/speakers": "4",
};

function Navigator() {
  const location = useLocation();
  return <Menu className="navigator" mode="horizontal" selectedKeys={routerKey[location.pathname]}>
    <Menu.Item key="1">   <Link to={"/"}>HOME</Link>                 </Menu.Item>
    <Menu.Item key="2">   <Link to={"/organizers"}>ORGANIZERS</Link> </Menu.Item>
    <Menu.Item key="3">   <Link to={"/timeline"}>TIMELINE</Link>     </Menu.Item>
    <Menu.Item key="4">   <Link to={"/speakers"}>SPEAKERS</Link>     </Menu.Item>
  </Menu>

}

export default Navigator;
