import React from 'react';
import { Box, Typography, Rating } from '@mui/material';

const Ratings = () => {
  return (
    <Box display="flex" justifyContent="space-around" p={2}>
      <Box textAlign="center">
        <Typography variant="body1">Dining</Typography>
        <Rating value={4.5} precision={0.5} readOnly />
      </Box>
      <Box textAlign="center">
        <Typography variant="body1">Delivery</Typography>
        <Rating value={4.0} precision={0.5} readOnly />
      </Box>
    </Box>
  );
};

export default Ratings;
