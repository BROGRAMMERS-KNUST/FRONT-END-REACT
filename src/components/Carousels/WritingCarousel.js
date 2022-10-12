import { Typography, Box, Button } from '@mui/material';
import Carousel from 'react-material-ui-carousel';
import writingFour from '../../images/w4.jpg';
import writingFive from '../../images/w2.jpg';
import writingSix from '../../images/w3.jpg';

import React from 'react';

const WritingCarousel = () => {
  return (
    <Box>
      <Carousel>
        <Box
          sx={{
            background: `url(${writingFour})`,
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
            Writing & Translation
          </Typography>
          <Typography align='center' fontFamily={'Nunito'} fontWeight='bold'>
            Get your words across-in any language
          </Typography>
        </Box>
        <Box
          sx={{
            background: `url(${writingFive})`,
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
            Writing & Translation
          </Typography>
          <Typography
            letterSpacing={1}
            variant='h5'
            align='center'
            fontFamily={'Nunito'}
          >
            Get your words across-in any language
          </Typography>
        </Box>
        <Box
          sx={{
            background: `url(${writingSix})`,
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
            Writing & Translation
          </Typography>
          <Typography
            letterSpacing={1}
            variant='h5'
            align='center'
            fontFamily={'Nunito'}
          >
            Get your words across-in any language
          </Typography>
        </Box>
      </Carousel>
    </Box>
  );
};

export default WritingCarousel;
