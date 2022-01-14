import React from 'react';
import {
  useLocation,
  Link,
} from "react-router-dom";

import { Menu } from 'antd';

const routerKey = {
  "/kdd/home": "1",
  "/kdd/organizers": "2",
  "/kdd/timeline": "3",
  "/kdd/submission": "4",
  "/kdd/speakers": "5",
  "/kdd/program": "6",
  "/current" : "7"
};

function Navigator() {
  const location = useLocation();
  return <Menu className="navigator" mode="horizontal" selectedKeys={routerKey[location.pathname]}>
    <Menu.Item key="1">   <Link to={"/kdd/home"}>HOME</Link>                      </Menu.Item>
    <Menu.Item key="2">   <Link to={"/kdd/organizers"}>ORGANIZERS</Link>          </Menu.Item>
    <Menu.Item key="3">   <Link to={"/kdd/timeline"}>TIMELINE</Link>              </Menu.Item>
    <Menu.Item key="4">   <Link to={"/kdd/submission"}>CALL FOR PAPERS</Link>     </Menu.Item>
    <Menu.Item key="5">   <Link to={"/kdd/speakers"}>SPEAKERS</Link>              </Menu.Item>
    <Menu.Item key="6">   <Link to={"/kdd/program"}>PROGRAM SKETCH</Link>         </Menu.Item>
    {/* <Menu.Item key="7">   <Link to={"/"}>CURRENT EVENT</Link>     </Menu.Item> */}
  </Menu>
}


export default Navigator;