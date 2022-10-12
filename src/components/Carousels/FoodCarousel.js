import React from 'react';
import { Typography, Box, Button } from '@mui/material';
import Carousel from 'react-material-ui-carousel';
import foodFour from '../../images/PagecardImages/foodFour.jpg';
import foodFive from '../../images/PagecardImages/foodFive.jpeg';
import foodSix from '../../images/berries-2277.jpg';

const FoodCarousel = () => {
  return (
    <Box>
      <Carousel>
        <Box
          sx={{
            background: `url(${foodFour})`,
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
            Food Services
          </Typography>
          <Typography
            letterSpacing={1}
            variant='h5'
            align='center'
            fontFamily={'Nunito'}
          >
            Get the best delivery services on campus
          </Typography>
        </Box>
        <Box
          sx={{
            background: `url(${foodFive})`,
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
          fontWeight='bold'
        >
          <Typography
            align='center'
            variant='h2'
            paddingTop={7.1}
            fontFamily={'Nunito'}
            fontWeight='bold'
            letterSpacing={2.5}
          >
            Food Services
          </Typography>
          <Typography
            letterSpacing={1}
            variant='h5'
            align='center'
            fontFamily={'Nunito'}
          >
            Get the best delivery services on campus
          </Typography>
        </Box>
        <Box
          sx={{
            background: `url(${foodSix})`,
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
          fontWeight='bold'
        >
          <Typography
            align='center'
            variant='h2'
            paddingTop={7.1}
            fontFamily={'Nunito'}
            fontWeight='bold'
            letterSpacing={2.5}
          >
            Food Services
          </Typography>
          <Typography
            letterSpacing={1}
            variant='h5'
            align='center'
            fontFamily={'Nunito'}
          >
            Get the best delivery services on campus
          </Typography>
        </Box>
      </Carousel>
    </Box>
  );
};

export default FoodCarousel;
