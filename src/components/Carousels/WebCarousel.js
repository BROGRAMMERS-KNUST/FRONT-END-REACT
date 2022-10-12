import React from 'react';
import { Typography, Box, Stack, Card, Button } from '@mui/material';
import Carousel from 'react-material-ui-carousel';
import webdevOne from '../../images/WEB1.jpg';
import webdevTwo from '../../images/WEB2.jpg';
import webdevThree from '../../images/WEB3.jpg';

const WebCarousel = () => {
  return (
    <Box>
      <Carousel autoPlay={true} duration={550} animation={'fade'}>
        <Box
          sx={{
            background: `url(${webdevOne})`,
            backgroundSize: 'cover',
            color: 'white',
            height: '205px',
            width: '93vw',
            borderRadius: '10px',
            marginTop: 3,
            margin: 'auto',
            marginBottom: 5,
            marginLeft: 0.5,
          }}
        >
          <Typography
            align='center'
            variant='h2'
            paddingTop={7.1}
            fontFamily={'Nunito'}
            fontWeight='bold'
            letterSpacing={2.5}
          >
            Web Development
          </Typography>
          <Typography
            letterSpacing={1}
            variant='h5'
            align='center'
            fontFamily={'Nunito'}
          >
            Need your own website? We've got you covered
          </Typography>
        </Box>
        <Box
          sx={{
            background: `url(${webdevTwo})`,
            backgroundSize: 'cover',
            color: 'white',
            height: '205px',
            width: '93vw',
            borderRadius: '10px',
            marginTop: 3,
            margin: 'auto',
            marginBottom: 5,
            marginLeft: 0.5,
          }}
        >
          <Typography
            align='center'
            variant='h2'
            paddingTop={7.1}
            fontFamily={'Nunito'}
            fontWeight='bold'
            letterSpacing={2.5}
          >
            Web Development
          </Typography>
          <Typography
            letterSpacing={1}
            variant='h5'
            align='center'
            fontFamily={'Nunito'}
          >
            Need your own website? We've got you covered
          </Typography>
        </Box>
        <Box
          sx={{
            background: `url(${webdevThree})`,
            backgroundSize: 'cover',
            color: 'white',
            height: '205px',
            width: '93vw',
            borderRadius: '10px',
            marginTop: 3,
            margin: 'auto',
            marginBottom: 5,
            marginLeft: 0.5,
          }}
        >
          <Typography
            align='center'
            variant='h2'
            paddingTop={7.1}
            fontFamily={'Nunito'}
            fontWeight='bold'
            letterSpacing={2.5}
          >
            Web Development
          </Typography>
          <Typography
            letterSpacing={1}
            variant='h5'
            align='center'
            fontFamily={'Nunito'}
          >
            Need your own website? We've got you covered
          </Typography>
        </Box>
      </Carousel>
    </Box>
  );
};

export default WebCarousel;
