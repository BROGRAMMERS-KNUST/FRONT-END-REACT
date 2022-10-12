import React from 'react';
import { Typography, Box, Stack, Card, Button } from '@mui/material';
import Carousel from 'react-material-ui-carousel';
import photographyThree from '../../images/artur-d-IADY2y5w7FQ-unsplash.jpg';
import photographyFour from '../../images/hanny-naibaho-aWXVxy8BSzc-unsplash.jpg';
import photographyFive from '../../images/dylan-mcleod-VRdZBLqnoMU-unsplash.jpg';
import photographySix from '../../images/PagecardImages/photographySix.jpg';
import { convertLength } from '@mui/material/styles/cssUtils';

const PhotographyCarousel = () => {
  return (
    <Box>
      <Carousel autoPlay={true}>
        <Box
          sx={{
            background: `url(${photographyFour})`,
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
            variant='h4'
            paddingTop={7.1}
            fontFamily={'Nunito'}
            fontWeight='bold'
          >
            Photography & Video
          </Typography>
          <Typography align='center' fontFamily={'Nunito'} fontWeight='bold'>
            Bring your story to life with creative videos
          </Typography>
        </Box>

        <Box
          sx={{
            background: `url(${photographyFive})`,
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
            variant='h4'
            paddingTop={7.1}
            fontFamily={'Nunito'}
            fontWeight='bold'
          >
            Photography & Video
          </Typography>
          <Typography align='center' fontFamily={'Nunito'} fontWeight='bold'>
            Bring your story to life with creative videos
          </Typography>
        </Box>

        <Box
          sx={{
            background: `url(${photographyThree})`,
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
            variant='h4'
            paddingTop={7.1}
            fontFamily={'Nunito'}
            fontWeight='bold'
          >
            Photography & Video
          </Typography>
          <Typography align='center' fontFamily={'Nunito'} fontWeight='bold'>
            Bring your story to life with creative videos
          </Typography>
        </Box>
      </Carousel>
    </Box>
  );
};

export default PhotographyCarousel;
