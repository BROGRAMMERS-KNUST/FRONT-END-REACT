import { Box, Typography } from '@mui/material';
import React from 'react';
import LandingPic3 from '../../images/16.png';
import Requirements from './Requirements';

const Background3 = () => {
  const imgStyle = {
    maxHeight: '36rem',
    left: '59.5%',
    top: '260%',
  };
  return (
    <Box
      sx={{
        minHeight: '78vh',
        marginLeft: 5,
        marginRight: 5,
        marginTop: -40,
        marginBottom: 50,
        //backgroundColor: 'bisque',
      }}
    >
      <Typography
        variant='h1'
        fontFamily='Nunito'
        marginTop={20}
        letterSpacing={1.8}
        sx={{ marginBottom: -1 }}
      >
        <span className='highlight5'>Interested</span> in <span> </span>
        <br />
        becoming a <span className='highlight5'></span>
        <br /> <span className='highlight5'> StuLancer ? </span>
      </Typography>
      <Box>
        <img style={imgStyle} src={LandingPic3} alt='3D model' />
      </Box>

      <Requirements />
    </Box>
  );
};

export default Background3;
