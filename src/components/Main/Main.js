import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import StulancerPicks from '../StulancerPicks';
import GridCategory from './GridCategory';
import TopRatedStulancers from '../TopRatedStulancers';
import WhyStulancer from './WhyStulancer';

const Main = () => {
  return (
    <Box
      sx={{
        minHeight: '80vh',
        marginLeft: 4,
        marginRight: 4,
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
