import React, { useContext } from 'react';
import { Menu, Badge } from 'antd';
import { Link, useNavigate } from 'react-router-dom';
import { useFavorites } from '../../context/FavoritesContext';
import { AuthContext } from '../../context/AuthContext';

const AppHeader: React.FC = () => {
  const { toggleCount } = useFavorites();
  const authContext = useContext(AuthContext);
  const navigate = useNavigate();

  if (!authContext) {
    return null;
  }

  const { user, logout } = authContext;

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

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
      {user && (
        <Menu.Item key="5" onClick={handleLogout}>
          Logout
        </Menu.Item>
      )}
    </Menu>
  );
};

export default AppHeader;
