import React from 'react';
import BoxTwo from '../components/AboutUs/BoxTwo';
import BoxThree from '../components/AboutUs/BoxThree';
import BoxFour from '../components/AboutUs/BoxFour';
import { Box } from '@mui/material';
import AboutUsCarousel from '../components/Carousels/AboutUsCarousel';

const AboutUS = () => {
  document.title = 'StuLancer Team 👩‍💻';
  return (
    <Box>
      <AboutUsCarousel />
      <BoxTwo />
      <BoxThree />
      <BoxFour />
    </Box>
  );
};

export default AboutUS;
