import React from 'react';
import { Menu } from 'antd';
import { Link } from 'react-router-dom';

const AppHeader: React.FC = () => {
  return (
    <Menu theme="light" mode="horizontal" defaultSelectedKeys={["1"]}>
      <Menu.Item key="1">
        <Link to="/">Home</Link>
      </Menu.Item>
      <Menu.Item key="2">
        <Link to="/product">Product</Link>
      </Menu.Item>
      <Menu.Item key="3">
        <Link to="/favorites">Favorites</Link>
      </Menu.Item>
    </Menu>
  );
};

export default AppHeader;
