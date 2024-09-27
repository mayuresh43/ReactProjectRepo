import React from 'react';
import { Box, Typography, Link } from '@mui/material';

const Contact = () => {
  return (
    <Box p={2}>
      <Typography variant="h6">Contact Us</Typography>
      <Typography variant="body1">Phone: +91 1234567890</Typography>
      <Link href="https://goo.gl/maps/dummy" target="_blank" rel="noopener">
        View Location on Google Maps
      </Link>
    </Box>
  );
};

export default Contact;
