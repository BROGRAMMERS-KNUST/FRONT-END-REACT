import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import GridCategory from './GridCategory';

const Main = () => {
  return (
    <Box
      sx={{
        minHeight: '40vh',
        marginLeft: '2rem',
        marginRight: '2rem',
        //backgroundColor: 'green',
      }}
    >
      <Typography
        variant='h4'
        fontFamily='Nunito'
        marginTop={20}
        marginBottom={3}
        gutterBottom
        sx={{ fontWeight: '700' }}
      >
        Explore Freelance Services <span> </span> <br />
      </Typography>

      <GridCategory />
    </Box>
  );
};

export default Main;
