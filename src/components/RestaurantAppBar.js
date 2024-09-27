import React from 'react';
import { AppBar, Toolbar, Typography } from '@mui/material';

const RestaurantAppBar = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6">PIZZA Mania</Typography>
        <Typography variant="body2" style={{ marginLeft: 'auto' }}>
          Italian, Fast Food - Sangli, India
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default RestaurantAppBar;
