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
  "/submission": "4",
  "/speakers": "5",
  "/program": "6",
  "/current" : "7"
};

function Navigator() {
  const location = useLocation();
  return <Menu className="navigator" mode="horizontal" selectedKeys={routerKey[location.pathname]}>
    <Menu.Item key="1">   <Link to={"/"}>NewHOME</Link>  </Menu.Item>
  </Menu>
}


export default Navigator;