import { Box, Typography } from '@mui/material';
import React from 'react';
import PortfolioPic from '../images/images_3.png';
import { useState } from 'react';

const PortfolioPage = () => {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
  return (
    <Box sx={{ minHeight: '78vh', marginLeft: 4, marginRight: 4 }}>
      <Typography variant='h1' fontFamily='Nunito' marginTop={20} gutterBottom>
        Hello <span> </span>
        <span>StuLancer</span>
        {/*<br /> <span className='highlight1'>Freelancer</span>*/}
        <br />
        <span className='highlight1'>{user.result.fullName}</span>
      </Typography>
      <img className='PortfolioPic' src={PortfolioPic} alt='3D model' />
      <Typography variant='h4' fontFamily='Nunito'>
        Welcome to your porfolio page
      </Typography>
    </Box>
  );
};

export default PortfolioPage;
