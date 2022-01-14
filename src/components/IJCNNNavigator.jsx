import React from 'react';
import {
  useLocation,
  Link,
} from "react-router-dom";


import { Menu } from 'antd';

const { SubMenu } = Menu;

function Navigator() {
  const location = useLocation();
  return <Menu className="navigator" mode="horizontal" selectedKeys={location.pathname}>
    <Menu.Item key="/">
      <Link to={"/"}>HOME</Link>
    </Menu.Item>

    <Menu.Item key="/ijcnn/organizers">   
      <Link to={"/ijcnn/organizers"}>ORGANIZERS</Link>
    </Menu.Item>

    <SubMenu key="SubMenu"  title="PAST EVENTS">
        <Menu.Item key="/kdd/home">
          <Link to={"/kdd/home"}>KDD Workshop 2021</Link>
        </Menu.Item>
    </SubMenu>
  </Menu>
}


export default Navigator;
