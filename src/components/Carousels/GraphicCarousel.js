import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import Carousel from 'react-material-ui-carousel';
import graphicSix from '../../images/9.png';
import graphicSeven from '../../images/PagecardImages/graphicSeven.jpg';
import graphicEight from '../../images/1.jpg';

const GraphicCarousel = () => {
  return (
    <Box>
      <Carousel autoPlay={true}>
        <Box
          sx={{
            background: `url(${graphicSix})`,
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
            Graphics & Design
          </Typography>
          <Typography
            letterSpacing={1}
            variant='h5'
            align='center'
            fontFamily={'Nunito'}
          >
            Designs to make you standout
          </Typography>
        </Box>
        <Box
          sx={{
            background: `url(${graphicEight})`,
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
            Graphics & Design
          </Typography>
          <Typography
            variant='h5'
            align='center'
            fontFamily={'Nunito'}
            letterSpacing={1}
          >
            Designs to make you standout
          </Typography>
        </Box>
        <Box
          sx={{
            background: `url(${graphicSeven})`,
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
            Graphics & Design
          </Typography>
          <Typography
            letterSpacing={1}
            variant='h5'
            align='center'
            fontFamily={'Nunito'}
          >
            Designs to make you standout
          </Typography>
        </Box>
      </Carousel>
    </Box>
  );
};

export default GraphicCarousel;
