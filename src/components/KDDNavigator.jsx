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
    <Menu.Item key="1">   <Link to={"/"}>HOME</Link>                 </Menu.Item>
    <Menu.Item key="2">   <Link to={"/organizers"}>ORGANIZERS</Link> </Menu.Item>
    <Menu.Item key="3">   <Link to={"/timeline"}>TIMELINE</Link>     </Menu.Item>
    <Menu.Item key="4">   <Link to={"/submission"}>CALL FOR PAPERS</Link>     </Menu.Item>
    <Menu.Item key="5">   <Link to={"/speakers"}>SPEAKERS</Link>     </Menu.Item>
    <Menu.Item key="6">   <Link to={"/program"}>PROGRAM SKETCH</Link>     </Menu.Item>
    {/* <Menu.Item key="7">   <Link to={"/current"}>CURRENT EVENT</Link>     </Menu.Item> */}
  </Menu>
}


export default Navigator;