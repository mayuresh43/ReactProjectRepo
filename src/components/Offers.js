import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';

const Offers = () => {
  return (
    <Card variant="outlined">
      <CardContent>
        <Typography variant="h5">Flat 10% OFF</Typography>
        <Typography variant="body2">On all orders above $50</Typography>
      </CardContent>
    </Card>
  );
};

export default Offers;
