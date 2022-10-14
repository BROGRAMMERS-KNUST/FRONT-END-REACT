import React from 'react';
import { Box, Button, Grid, Typography } from '@mui/material';
import Carousel from 'react-material-ui-carousel';
import bgpic from '../../images/AboutUs/IMG-20221013-WA0023.jpg';
import bgpic1 from '../../images/AboutUs/a1.jpg';
import bgpic2 from '../../images/AboutUs/a2.jpg';
import bgpic3 from '../../images/macarons-2548827.jpg';

const AboutUsCarousel = () => {
  return (
    <Box
      sx={{
        marginTop: 10,
        marginLeft: 5,
        marginRight: 5,
        marginBottom: 15,
      }}
    >
      <Carousel autoPlay={true}>
        <Box
          sx={{
            background: `url(${bgpic})`,

            backgroundSize: 'cover',
            color: 'white',
            height: '520px',
            width: '93vw',
            borderRadius: '20px ',
            marginTop: 1,
            marginBottom: 5,
            marginLeft: 0.5,
          }}
        >
          <Typography
            variant='h2'
            letterSpacing={2.5}
            sx={{
              fontFamily: 'Nunito',
              textAlign: 'center',
              paddingTop: 16.5,
              marginBottom: -5,
              fontWeight: '700',
            }}
          >
            We are on a <span className='highlight'>misson </span>to
          </Typography>
          <Typography
            variant='h1'
            letterSpacing={2.3}
            sx={{
              fontFamily: 'Nunito',
              textAlign: 'center',
              paddingTop: 3,
              fontWeight: '700',
            }}
          >
            reduce the
            <span className='highlight'> hassle</span> of
          </Typography>

          <Typography
            variant='h2'
            letterSpacing={2.3}
            sx={{
              fontFamily: 'Nunito',
              textAlign: 'center',
              fontWeight: '700',
            }}
          >
            finding reliable services on
            <span className='highlight'> campus</span>
          </Typography>
        </Box>

        <Box
          sx={{
            background: `url(${bgpic1})`,

            backgroundSize: 'cover',
            color: 'white',
            height: '520px',
            width: '93vw',
            borderRadius: '20px ',
            marginTop: 1,
            marginBottom: 5,
            marginLeft: 0.5,
          }}
        >
          <Typography
            variant='h2'
            letterSpacing={2.5}
            sx={{
              fontFamily: 'Nunito',
              textAlign: 'center',
              paddingTop: 16.5,
              marginBottom: -5,
              fontWeight: '700',
            }}
          >
            We are on a <span className='highlight'>misson </span>to
          </Typography>
          <Typography
            variant='h1'
            letterSpacing={2.3}
            sx={{
              fontFamily: 'Nunito',
              textAlign: 'center',
              paddingTop: 3,
              fontWeight: '700',
            }}
          >
            reduce the
            <span className='highlight'> hassle</span> of
          </Typography>

          <Typography
            variant='h2'
            letterSpacing={2.3}
            sx={{
              fontFamily: 'Nunito',
              textAlign: 'center',
              fontWeight: '700',
            }}
          >
            finding reliable services on
            <span className='highlight'> campus</span>
          </Typography>
        </Box>

        <Box
          sx={{
            background: `url(${bgpic2})`,

            backgroundSize: 'cover',
            color: 'white',
            height: '520px',
            width: '93vw',
            borderRadius: '20px ',
            marginTop: 1,
            marginBottom: 5,
            marginLeft: 0.5,
          }}
        >
          <Typography
            variant='h2'
            letterSpacing={2.5}
            sx={{
              fontFamily: 'Nunito',
              textAlign: 'center',
              paddingTop: 16.5,
              marginBottom: -5,
              fontWeight: '700',
            }}
          >
            We are on a <span className='highlight'>misson </span>to
          </Typography>
          <Typography
            variant='h1'
            letterSpacing={2.3}
            sx={{
              fontFamily: 'Nunito',
              textAlign: 'center',
              paddingTop: 3,
              fontWeight: '700',
            }}
          >
            reduce the
            <span className='highlight'> hassle</span> of
          </Typography>

          <Typography
            variant='h2'
            letterSpacing={2.3}
            sx={{
              fontFamily: 'Nunito',
              textAlign: 'center',
              fontWeight: '700',
            }}
          >
            finding reliable services on
            <span className='highlight'> campus</span>
          </Typography>
        </Box>
      </Carousel>
    </Box>
  );
};

export default AboutUsCarousel;
