import React from 'react';
import { Menu, Badge } from 'antd';
import { Link } from 'react-router-dom';
import { useFavorites } from '../../context/FavoritesContext';

const AppHeader: React.FC = () => {

  const { toggleCount } = useFavorites();

  return (
    <Menu theme="light" mode="horizontal" defaultSelectedKeys={["1"]}>
      <Menu.Item key="1">
        <Link to="/">Home</Link>
      </Menu.Item>
      <Menu.Item key="2">
        <Link to="/contact">Contact</Link>
      </Menu.Item>
      <Menu.Item key="3">
        <Link to="/product">Product</Link>
      </Menu.Item>
      <Menu.Item key="4">
        <Link to="/favorites">
          Favorites <Badge count={toggleCount} />
        </Link>
      </Menu.Item>
    </Menu>
  );
};

export default AppHeader;
