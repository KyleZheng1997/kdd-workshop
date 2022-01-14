import React from 'react';
import {
  useLocation,
  Link,
} from "react-router-dom";

import { Menu } from 'antd';

const routerKey = {
  "/": "1",
  "/ijcnn/organizers": "2",
  "/ijcnn/timeline": "3",
  "/ijcnn/submission": "4",
  "/ijcnn/speakers": "5",
  "/ijcnn/program": "6",
};

function Navigator() {
  const location = useLocation();
  return <Menu className="navigator" mode="horizontal" selectedKeys={routerKey[location.pathname]}>
    <Menu.Item key="1">   <Link to={"/"}>IJCNN HOME</Link>                             </Menu.Item>
    {/* <Menu.Item key="2">   <Link to={"/ijcnn/organizers"}>ORGANIZERS</Link>       </Menu.Item>
    <Menu.Item key="3">   <Link to={"/ijcnn/timeline"}>TIMELINE</Link>           </Menu.Item>
    <Menu.Item key="4">   <Link to={"/ijcnn/submission"}>CALL FOR PAPERS</Link>  </Menu.Item>
    <Menu.Item key="5">   <Link to={"/ijcnn/speakers"}>SPEAKERS</Link>           </Menu.Item>
    <Menu.Item key="6">   <Link to={"/ijcnn/program"}>PROGRAM SKETCH</Link>      </Menu.Item> */}
  </Menu>
}


export default Navigator;
