import React from 'react';
import { Typography, Box } from '@mui/material';

const Overview = () => {
  return (
    <Box p={2}>
      <Typography variant="h6">About this place</Typography>
      <Typography variant="body1" paragraph>
        PIZZA Mania is an Italian and fast food restaurant located in the heart of Sangli. We offer a wide variety of pizzas, pastas, and quick bites to satisfy your cravings.
      </Typography>
    </Box>
  );
};

export default Overview;
