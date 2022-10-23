import React from 'react';
import { Typography, Box, Stack, Card, Button } from '@mui/material';
import DeliveryDiningIcon from '@mui/icons-material/DeliveryDining';
import FastfoodIcon from '@mui/icons-material/Fastfood';
import CakeIcon from '@mui/icons-material/Cake';
import LocalBarIcon from '@mui/icons-material/LocalBar';
import CelebrationIcon from '@mui/icons-material/Celebration';
import LocalPizzaIcon from '@mui/icons-material/LocalPizza';
import LunchDiningIcon from '@mui/icons-material/LunchDining';
//IMAGES
import foodOne from '../../images/PagecardImages/foodOne.webp';
import foodTwo from '../../images/PagecardImages/anh-nguyen-kcA-c3f_3FE-unsplash.jpg';
import foodThree from '../../images/PagecardImages/foodThree.jpg';
import FoodCarousel from '../Carousels/FoodCarousel';
function FoodServicesPageCards() {
  return (
    <Box>
      <FoodCarousel />
      <Typography fontWeight='bold' sx={{ fontFamily: 'Nunito', marginTop: 1 }}>
        {' '}
        Most popular in Food Services
      </Typography>{' '}
      <br />
      <Stack direction='row' spacing={8} sx={{ flexWrap: 'nowrap' }}>
        <Box
          sx={{
            bgcolor: 'background.paper',
            boxShadow: 2,
            borderRadius: 2,
            p: 2,
            width: '11vw',
          }}
        >
          <DeliveryDiningIcon color='primary' /> Food Delivery
        </Box>
        <Box
          sx={{
            bgcolor: 'background.paper',
            boxShadow: 2,
            borderRadius: 2,
            p: 2,
            width: '10vw',
          }}
        >
          <FastfoodIcon color='primary' /> Fast Food
        </Box>
        <Box
          sx={{
            bgcolor: 'background.paper',
            boxShadow: 2,
            borderRadius: 2,
            p: 2,
            width: '10vw',
          }}
        >
          <CakeIcon color='primary' /> Pastries
        </Box>
        <Box
          sx={{
            bgcolor: 'background.paper',
            boxShadow: 2,
            borderRadius: 2,
            p: 2,
            width: '10vw',
          }}
        >
          <LocalBarIcon color='primary' /> Drinks
        </Box>
        <Box
          sx={{
            bgcolor: 'background.paper',
            boxShadow: 2,
            borderRadius: 2,
            p: 2,
            width: '12vw',
          }}
        >
          <CelebrationIcon color='primary' /> Parties & Events
        </Box>

        <Box
          sx={{
            bgcolor: 'background.paper',
            boxShadow: 2,
            borderRadius: 2,
            p: 2,
            width: '8vw',
          }}
        >
          <LocalPizzaIcon color='primary' /> Pizza
        </Box>

        <Box
          sx={{
            bgcolor: 'background.paper',
            boxShadow: 2,
            borderRadius: 2,
            p: 2,
            width: '8vw',
          }}
        >
          <LunchDiningIcon color='primary' /> Burgers
        </Box>
      </Stack>
      <Stack
        direction='row'
        spacing={8}
        sx={{ flexWrap: 'wrap' }}
        marginTop={5}
      >
        <Stack>
          <Card
            sx={{
              background: `url(${foodOne})`,
              backgroundSize: 'cover',
              width: '300px',
              height: 200,
            }}
          ></Card>
          <Typography
            variant='h5'
            width='300px'
            sx={{
              fontFamily: 'Nunito',
              marginTop: 1,
            }}
          >
            Food Delivery
          </Typography>
          <Typography variant='body' width='300px'>
            Feeling hungry? Order your food from the best stulancers available
            with the fastest delivery.
          </Typography>
        </Stack>

        <Stack>
          <Card
            sx={{
              background: `url(${foodTwo})`,
              backgroundSize: 'cover',
              width: 300,
              height: 200,
              backgroundPositionY: -50,
            }}
          ></Card>
          <Typography
            variant='h5'
            width='300px'
            sx={{
              fontFamily: 'Nunito',
              marginTop: 1,
            }}
          >
            Catering Services
          </Typography>
          <Typography variant='body' width='300px'>
            Do you need item13 for your events? Don't fret, there are Stulancers
            to sort you out.
          </Typography>
        </Stack>

        <Stack>
          <Card
            sx={{
              background: `url(${foodThree})`,
              backgroundSize: 'cover',
              width: '300px',
              height: 200,
            }}
          />
          <Typography
            variant='h5'
            width='300px'
            sx={{
              fontFamily: 'Nunito',
              marginTop: 1,
            }}
          >
            Miscellaneous
          </Typography>
          <Typography variant='body' width='300px'>
            <Button sx={{ color: 'black' }}>Fast Foods</Button>
            <br />
            <Button sx={{ color: 'black' }}>Local Dishes</Button>
            <br />
            <Button sx={{ color: 'black' }}>Continental Dishes</Button>
          </Typography>
        </Stack>
      </Stack>
    </Box>
  );
}

export default FoodServicesPageCards;
