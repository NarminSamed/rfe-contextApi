import React, { useContext } from 'react';
import { Menu } from 'antd';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';

const AdminHeader: React.FC = () => {

  const authContext = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  if (!authContext) {
    return null;
  }

  const { user, logout } = authContext;

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  if (location.pathname === '/login') {
    return null;
  }
  return (
    <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["1"]}>
      <Menu.Item key="1">
        <Link to="/admin">Dashboard</Link>
      </Menu.Item>
      <Menu.Item key="2">
        <Link to="/admin/products">Products</Link>
      </Menu.Item>
      <Menu.Item key="3">
        <Link to="/admin/add-category">Add Category</Link>
      </Menu.Item>
      {user ? (
        <Menu.Item key="4" onClick={handleLogout}>
          Logout
        </Menu.Item>
      ) : (
        <Menu.Item key="5">
          <Link to="/login">Login</Link>
        </Menu.Item>
      )}
    </Menu>
  );
};

export default AdminHeader;
