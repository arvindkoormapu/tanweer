import React, { useState } from 'react';
import Header from '../Header';
import Footer from "../Footer";

import Drawer from '../Drawer';

const MainLayout = ({ children }) => {
  const [isDrawerVisible, setIsDrawerVisible] = useState(false);

  const showDrawer = () => {
    setIsDrawerVisible(true);
    console.log('hi')
  };

  const closeDrawer = () => {
    setIsDrawerVisible(false);
  };

  return (
    <div>
      <Header onMenuClick={showDrawer} />
      <Drawer isVisible={isDrawerVisible} onClose={closeDrawer} />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default MainLayout;
