import React from 'react';
import {
  useLocation,
  Link,
} from "react-router-dom";

import { Menu } from 'antd';


function Navigator() {
  const location = useLocation();
  return <Menu className="navigator" mode="horizontal" selectedKeys={location.pathname}>
      <Menu.Item key="/kdd/home">         <Link to={"/kdd/home"}>HOME</Link>                      </Menu.Item>
      <Menu.Item key="/kdd/organizers">   <Link to={"/kdd/organizers"}>ORGANIZERS</Link>          </Menu.Item>
      <Menu.Item key="/kdd/timeline">     <Link to={"/kdd/timeline"}>TIMELINE</Link>              </Menu.Item>
      <Menu.Item key="/kdd/submission">   <Link to={"/kdd/submission"}>CALL FOR PAPERS</Link>     </Menu.Item>
      <Menu.Item key="/kdd/speakers">     <Link to={"/kdd/speakers"}>SPEAKERS</Link>              </Menu.Item>
      <Menu.Item key="/kdd/program">      <Link to={"/kdd/program"}>PROGRAM SKETCH</Link>         </Menu.Item>
      <Menu.Item key="/">                 <Link to={"/"}>CURRENT EVENT</Link>                     </Menu.Item>
  </Menu>
}


export default Navigator;