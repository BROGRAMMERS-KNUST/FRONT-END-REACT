import React from 'react';
import { Typography, Box, Stack, Card, Button } from '@mui/material';
import Carousel from 'react-material-ui-carousel';
import webdevOne from '../../images/PagecardImages/webdevOne.webp';
import webdevTwo from '../../images/PagecardImages/webdevTwo.jpeg';
import webdevThree from '../../images/PagecardImages/webdevThree.webp';

const WebCarousel = () => {
  return (
    <Box>
      <Carousel>
        <Box
          sx={{
            background: `url(${webdevOne})`,
            color: 'white',
            height: '200px',
            width: '95vw',
            borderRadius: '10px',
            marginTop: 3,
            margin: 'auto',
            marginBottom: 5,
            marginLeft: 0,
          }}
        >
          <Typography
            align='center'
            variant='h4'
            paddingTop={3}
            fontFamily={'Nunito'}
            fontWeight='bold'
          >
            Web Development
          </Typography>
          <Typography align='center' fontFamily={'Nunito'} fontWeight='bold'>
            Need your own website? We've got you covered
            <br />
            <br />
            <Button style={{ margin: 'auto' }} variant='contained'>
              {' '}
              How Stulancer Works
            </Button>
          </Typography>
        </Box>
        <Box
          sx={{
            background: `url(${webdevTwo})`,
            color: 'white',
            height: '200px',
            width: '95vw',
            borderRadius: '10px',
            marginTop: 3,
            margin: 'auto',
            marginBottom: 5,
            marginLeft: 0,
          }}
        >
          <Typography
            align='center'
            variant='h4'
            paddingTop={3}
            fontFamily={'Nunito'}
            fontWeight='bold'
          >
            Web Development
          </Typography>
          <Typography align='center' fontFamily={'Nunito'} fontWeight='bold'>
            Need your own website? We've got you covered
            <br />
            <br />
            <Button style={{ margin: 'auto' }} variant='contained'>
              {' '}
              How Stulancer Works
            </Button>
          </Typography>
        </Box>
        <Box
          sx={{
            background: `url(${webdevThree})`,
            backgroundSize: 'cover',
            color: 'white',
            height: '200px',
            width: '95vw',
            borderRadius: '10px',
            marginTop: 3,
            margin: 'auto',
            marginBottom: 5,
            marginLeft: 0,
          }}
        >
          <Typography
            align='center'
            variant='h4'
            paddingTop={3}
            fontFamily={'Nunito'}
            fontWeight='bold'
          >
            Web Development
          </Typography>
          <Typography
            align='center'
            fontFamily={'Nunito'}
            fontWeight='bold'
            color='secondary'
          >
            Need your own website? We've got you covered
            <br />
            <br />
            <Button style={{ margin: 'auto' }} variant='contained'>
              {' '}
              How Stulancer Works
            </Button>
          </Typography>
        </Box>
      </Carousel>
    </Box>
  );
};

export default WebCarousel;
