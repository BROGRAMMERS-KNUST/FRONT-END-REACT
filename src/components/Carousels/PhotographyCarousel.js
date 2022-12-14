import React from 'react';
import { Typography, Box } from '@mui/material';
import Carousel from 'react-material-ui-carousel';
import photographyThree from '../../images/artur-d-IADY2y5w7FQ-unsplash.jpg';
import photographyFour from '../../images/hanny-naibaho-aWXVxy8BSzc-unsplash.jpg';
import photographyFive from '../../images/dylan-mcleod-VRdZBLqnoMU-unsplash.jpg';

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
            variant='h2'
            paddingTop={7.1}
            fontFamily={'Nunito'}
            fontWeight='bold'
            letterSpacing={2.5}
          >
            Photography & Video
          </Typography>
          <Typography
            letterSpacing={1}
            variant='h5'
            align='center'
            fontFamily={'Nunito'}
          >
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
            variant='h2'
            paddingTop={7.1}
            fontFamily={'Nunito'}
            fontWeight='bold'
            letterSpacing={2.5}
          >
            Photography & Video
          </Typography>
          <Typography
            letterSpacing={1}
            variant='h5'
            align='center'
            fontFamily={'Nunito'}
          >
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
            variant='h2'
            paddingTop={7.1}
            fontFamily={'Nunito'}
            fontWeight='bold'
            letterSpacing={2.5}
          >
            Photography & Video
          </Typography>
          <Typography
            letterSpacing={1}
            variant='h5'
            align='center'
            fontFamily={'Nunito'}
          >
            Bring your story to life with creative videos
          </Typography>
        </Box>
      </Carousel>
    </Box>
  );
};

export default PhotographyCarousel;
