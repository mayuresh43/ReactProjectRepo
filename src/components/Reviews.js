import React from 'react';
import { Box, Typography } from '@mui/material';

const Reviews = () => {
  const reviews = [
    { user: 'John', review: 'Great place! Loved the pizza.' },
    { user: 'Jane', review: 'Good food, quick delivery.' },
  ];

  return (
    <Box p={2}>
      <Typography variant="h6">Customer Reviews</Typography>
      {reviews.map((review, index) => (
        <Box key={index} my={1}>
          <Typography variant="body1">{review.user}</Typography>
          <Typography variant="body2">{review.review}</Typography>
        </Box>
      ))}
    </Box>
  );
};

export default Reviews;
