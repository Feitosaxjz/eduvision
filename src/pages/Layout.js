import React, { useState } from 'react';
import Sidebar from './Sidebar';
import './Dashboard.css'; // mantém o mesmo CSS da dashboard

const Layout = ({ children }) => {
  const [sidebarVisible, setSidebarVisible] = useState(true);

  return (
    <div className="dashboard-container">
      <Sidebar visible={sidebarVisible} />
      <div className="dashboard-main">
        {children}
      </div>
    </div>
  );
};

export default Layout;
