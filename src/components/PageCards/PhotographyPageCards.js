//COMPONENTS
import React from 'react';
import { Typography, Box, Stack, Card, Button } from '@mui/material';
import BrushIcon from '@mui/icons-material/Brush';
import VideoCallIcon from '@mui/icons-material/VideoCall';
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import AnimationIcon from '@mui/icons-material/Animation';
import SchoolIcon from '@mui/icons-material/School';
import FilterIcon from '@mui/icons-material/Filter';

//IMAGES
import photographyOne from '../../images/PagecardImages/photographyOne.jpg';
import photographyTwo from '../../images/PagecardImages/photographyTwo.webp';
import photographyThree from '../../images/PagecardImages/photographyThree.jpg';
import PhotographyCarousel from '../Carousels/PhotographyCarousel';

function PageCards() {
  return (
    <Box marginLeft={1}>
      <PhotographyCarousel />
      <Typography fontWeight='medium'>
        {' '}
        Most popular in Photograpgy & Video
      </Typography>{' '}
      <br />
      <Stack direction='row' spacing={4} sx={{ flexWrap: 'nowrap' }}>
        <Box
          sx={{
            bgcolor: 'background.paper',
            boxShadow: 1,
            borderRadius: 2,
            p: 2,
            width: '11vw',
          }}
        >
          <VideoCallIcon color='primary' /> Video Editing
        </Box>
        <Box
          sx={{
            bgcolor: 'background.paper',
            boxShadow: 1,
            borderRadius: 2,
            p: 2,
            width: '10vw',
          }}
        >
          <CameraAltIcon color='primary' /> Photoshoot
        </Box>
        <Box
          sx={{
            bgcolor: 'background.paper',
            boxShadow: 1,
            borderRadius: 2,
            p: 2,
            width: '14vw',
          }}
        >
          <BrushIcon color='primary' /> Social Media Videos
        </Box>
        <Box
          sx={{
            bgcolor: 'background.paper',
            boxShadow: 1,
            borderRadius: 2,
            p: 2,
            width: '10vw',
          }}
        >
          <AnimationIcon color='primary' /> Animation
        </Box>
        <Box
          sx={{
            bgcolor: 'background.paper',
            boxShadow: 1,
            borderRadius: 2,
            p: 2,
            width: '17vw',
          }}
        >
          <SchoolIcon color='primary' /> Graduation & Matriculation
        </Box>
        <Box
          sx={{
            bgcolor: 'background.paper',
            boxShadow: 1,
            borderRadius: 2,
            p: 2,
            width: '12vw',
          }}
        >
          <FilterIcon color='primary' /> Logo Animation
        </Box>
      </Stack>
      <br />
      <Stack direction='row' spacing={5} sx={{ flexWrap: 'nowrap' }}>
        <Stack>
          <Card
            sx={{
              background: `url(${photographyOne})`,
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
            Photography
          </Typography>
          <Typography variant='body' width='300px'>
            <Button sx={{ color: 'black' }}>Photoshoots</Button> <br />{' '}
            <Button sx={{ color: 'black' }}> Birthdays & Parties</Button> <br />{' '}
            <Button sx={{ color: 'black' }}>Graduation & Matriculation </Button>
            <br /> <Button sx={{ color: 'black' }}>Local photography</Button>
          </Typography>
        </Stack>

        <Stack>
          <Card
            sx={{
              background: `url(${photographyTwo})`,
              backgroundSize: 'cover',
              width: 300,
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
            Video Editing
          </Typography>
          <Typography variant='body' width='300px'>
            <Button sx={{ color: 'black' }}>Video Editing</Button> <br />{' '}
            <Button sx={{ color: 'black' }}>Social Media Videos</Button> <br />{' '}
            <Button sx={{ color: 'black' }}>Real Estate Promos</Button>
            <br /> <Button sx={{ color: 'black' }}>Animation</Button>
          </Typography>
        </Stack>

        <Stack>
          <Card
            sx={{
              background: `url(${photographyThree})`,
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
            Miscellaneous
          </Typography>
          <Typography variant='body' width='300px'>
            <Button sx={{ color: 'black' }}>Logo Animation</Button> <br />{' '}
            <Button sx={{ color: 'black' }}>NFT Animation</Button> <br />{' '}
            <Button sx={{ color: 'black' }}>Animation for Kids</Button>
            <br /> <Button sx={{ color: 'black' }}>Videographers</Button>
          </Typography>
        </Stack>
      </Stack>
    </Box>
  );
}

export default PageCards;
