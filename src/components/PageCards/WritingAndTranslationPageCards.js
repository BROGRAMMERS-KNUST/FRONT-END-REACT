//COMPONENTS
import React from 'react';
import { Typography, Box, Stack, Card, Button } from '@mui/material';
import TranslateIcon from '@mui/icons-material/Translate';
import EditIcon from '@mui/icons-material/Edit';
import NoteAltIcon from '@mui/icons-material/NoteAlt';
import BookIcon from '@mui/icons-material/Book';
import CallIcon from '@mui/icons-material/Call';
import LocalPostOfficeIcon from '@mui/icons-material/LocalPostOffice';
import SchoolIcon from '@mui/icons-material/School';
//IMAGES
import writingOne from '../../images/PagecardImages/writingOne.webp';
import writingTwo from '../../images/PagecardImages/writingTwo.webp';
import writingThree from '../../images/PagecardImages/writingThree.webp';
import WritingCarousel from '../Carousels/WritingCarousel';

function PageCards() {
  return (
    <Box marginLeft={1}>
      <WritingCarousel />
      <Typography fontWeight='bold' sx={{ fontFamily: 'Nunito', marginTop: 1 }}>
        {' '}
        Most popular in Writing & Translation
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
          <TranslateIcon color='primary' />
          Translation
        </Box>
        <Box
          sx={{
            bgcolor: 'background.paper',
            boxShadow: 1,
            borderRadius: 2,
            p: 2,
            width: '11vw',
          }}
        >
          <EditIcon color='primary' />
          Ghostwriting
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
          <NoteAltIcon color='primary' /> Resume Writing
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
          <BookIcon color='primary' /> Book Writing
        </Box>
        <Box
          sx={{
            bgcolor: 'background.paper',
            boxShadow: 2,
            borderRadius: 2,
            p: 2,
            width: '11vw',
          }}
        >
          <CallIcon color='primary' /> Client call
        </Box>
        <Box
          sx={{
            bgcolor: 'background.paper',
            boxShadow: 2,
            borderRadius: 2,
            p: 2,
            width: '11vw',
          }}
        >
          <LocalPostOfficeIcon color='primary' /> Cover letters
        </Box>

        <Box
          sx={{
            bgcolor: 'background.paper',
            boxShadow: 2,
            borderRadius: 2,
            p: 2,
            width: '11vw',
          }}
        >
          <SchoolIcon color='primary' /> Case Studies
        </Box>
      </Stack>
      <br />
      <Typography variant='h5' fontWeight='medium'>
        Explore Writing & Translation
      </Typography>
      <Stack direction='row' spacing={5} sx={{ flexWrap: 'nowrap' }}>
        <Stack>
          <Card
            sx={{
              background: `url(${writingOne})`,
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
            Content Writing and Editing
          </Typography>
          <Typography variant='body' width='300px'>
            <Button sx={{ color: 'black' }}>Articles & Blog Posts</Button>{' '}
            <br />
            <Button sx={{ color: 'black' }}>Proofreading & Editing</Button>
            <br /> <Button sx={{ color: 'black' }}>Website Content </Button>
            <Button sx={{ color: 'black' }}>Book Writing & Editing</Button>
          </Typography>
        </Stack>

        <Stack>
          <Card
            sx={{
              background: `url(${writingTwo})`,
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
            Career Writing
          </Typography>
          <Typography variant='body' width='300px'>
            <Button sx={{ color: 'black' }}>Resume Writing </Button>
            <br /> <Button sx={{ color: 'black' }}>Cover Letters </Button>{' '}
            <br />
            <Button sx={{ color: 'black' }}>LinkedIn Profiles</Button>
          </Typography>
        </Stack>

        <Stack>
          <Card
            sx={{
              background: `url(${writingThree})`,
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
            Translation & Transcription
          </Typography>
          <Typography variant='body' width='300px'>
            <Button sx={{ color: 'black' }}>Translation </Button> <br />
            <Button sx={{ color: 'black' }}>Transcription</Button>
          </Typography>
        </Stack>
      </Stack>
    </Box>
  );
}

export default PageCards;
