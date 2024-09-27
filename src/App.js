import React from 'react';
import RestaurantAppBar from './components/RestaurantAppBar';
import Ratings from './components/Ratings';
import TabsNavigation from './components/TabsNavigation';
import Offers from './components/Offers';
import Contact from './components/Contact';
import { Box } from '@mui/material';

const App = () => {
  return (
    <Box>
      <RestaurantAppBar />
      <Ratings />
      <TabsNavigation />
      <Offers />
      <Contact />
    </Box>
  );
};

export default App;