import React, { useState } from 'react';
import { Tabs, Tab, Box } from '@mui/material';
import Overview from './Overview';
import Menu from './Menu';
import Reviews from './Reviews';

const TabsNavigation = () => {
  const [selectedTab, setSelectedTab] = useState(0);

  const handleChange = (event, newValue) => {
    setSelectedTab(newValue);
  };

  return (
    <Box>
      <Tabs value={selectedTab} onChange={handleChange} centered>
        <Tab label="Overview" />
        <Tab label="Menu" />
        <Tab label="Reviews" />
      </Tabs>
      {selectedTab === 0 && <Overview />}
      {selectedTab === 1 && <Menu />}
      {selectedTab === 2 && <Reviews />}
    </Box>
  );
};

export default TabsNavigation;
