//COMPONENTS
import React from 'react';
import { Box, Stack, Typography, Button } from '@mui/material';
import Card from '@mui/material/Card';
import ImageIcon from '@mui/icons-material/Image';
import InstagramIcon from '@mui/icons-material/Instagram';
import LaptopIcon from '@mui/icons-material/Laptop';
import ColorLensIcon from '@mui/icons-material/ColorLens';
import HowToRegIcon from '@mui/icons-material/HowToReg';
import BrushIcon from '@mui/icons-material/Brush';
import GraphicCarousel from '../Carousels/GraphicCarousel';
import MonitorIcon from '@mui/icons-material/Monitor';
import SourceIcon from '@mui/icons-material/Source';
import DisplaySettingsIcon from '@mui/icons-material/DisplaySettings';
import DesignServicesIcon from '@mui/icons-material/DesignServices';
import EngineeringIcon from '@mui/icons-material/Engineering';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
//IMAGES
import graphicOne from '../../images/PagecardImages/graphicOne.jpeg';
import graphicTwo from '../../images/PagecardImages/graphicTwo.webp';
import graphicThree from '../../images/PagecardImages/graphicThree.webp';
import graphicFour from '../../images/PagecardImages/graphicFour.webp';
import graphicFive from '../../images/PagecardImages/graphicFive.webp';

function WebDesignPageCards() {
  return (
    <div>
      <Box marginLeft={1}>
        <Typography fontWeight='medium'>
          {' '}
          Most popular in Web Development
        </Typography>{' '}
        <br />
        <Stack direction='row' spacing={8.3} sx={{ flexWrap: 'nowrap' }}>
          <Box
            sx={{
              bgcolor: 'background.paper',
              boxShadow: 2,
              borderRadius: 2,
              p: 2,
              width: '11.5vw',
            }}
          >
            <MonitorIcon color='primary' /> Front End Dev
          </Box>
          <Box
            sx={{
              bgcolor: 'background.paper',
              boxShadow: 2,
              borderRadius: 2,
              p: 2,
              width: '11.5vw',
            }}
          >
            <DisplaySettingsIcon color='primary' /> Back End Dev
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
            <DesignServicesIcon color='primary' /> UI/UX
          </Box>
          <Box
            sx={{
              bgcolor: 'background.paper',
              boxShadow: 2,
              borderRadius: 2,
              p: 2,
              width: '11.5vw',
            }}
          >
            <EngineeringIcon color='primary' /> DevOps
          </Box>
          <Box
            sx={{
              bgcolor: 'background.paper',
              boxShadow: 2,
              borderRadius: 2,
              p: 2,
              width: '13vw',
            }}
          >
            <ManageAccountsIcon color='primary' /> Project Manager
          </Box>
          <Box
            sx={{
              bgcolor: 'background.paper',
              boxShadow: 2,
              borderRadius: 2,
              p: 2,
              width: '13vw',
            }}
          >
            <SourceIcon color='primary' /> Content Developer
          </Box>
        </Stack>
        {/* <Typography
          sx={{ fontFamily: 'Nunito', fontWeight: '700' }}
          variant='h5'
          marginTop={1}
          gutterBottom
        >
          Explore Graphics & Design
        </Typography>
        <Stack direction='row' spacing={8} sx={{ flexWrap: 'nowrap' }}>
          <Stack>
            <Card
              sx={{
                background: `url(${graphicOne})`,
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
              Logo and Brand Identity
            </Typography>
            <Typography variant='body' width='300px'>
              <Button sx={{ color: 'black' }}>Logo Maker</Button>
              <br />
              <Button sx={{ color: 'black' }}>Brand Style Guides</Button>
              <br />
              <Button sx={{ color: 'black' }}>Logo Design</Button>
              <br />
              <Button sx={{ color: 'black' }}>
                Business Cards & Stationaries
              </Button>
              <br />
            </Typography>
          </Stack>

          <Stack>
            <Card
              sx={{
                background: `url(${graphicTwo})`,
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
              Visual Design
            </Typography>
            <Typography variant='body' width='300px'>
              <Button sx={{ color: 'black' }}>Image Editing</Button> <br />{' '}
              <Button sx={{ color: 'black' }}>Presentation Design</Button>{' '}
              <br />{' '}
              <Button sx={{ color: 'black' }}>Infographic Design </Button>
              <br /> <Button sx={{ color: 'black' }}>Resume Design</Button>
            </Typography>
          </Stack>

          <Stack>
            <Card
              sx={{
                background: `url(${graphicThree})`,
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
              Print Design
            </Typography>
            <Typography variant='body' width='300px'>
              <Button sx={{ color: 'black' }}>T-Shirts & Merchandise</Button>{' '}
              <br />
              <Button sx={{ color: 'black' }}>Flyer Design</Button> <br />{' '}
              <Button sx={{ color: 'black' }}>Brochure Design </Button>
              <br /> <Button sx={{ color: 'black' }}>Poster Design</Button>{' '}
              <br />
              <Button sx={{ color: 'black' }}>Menu Design</Button>
              <br />
              <Button sx={{ color: 'black' }}>Invitation Design</Button>
            </Typography>
          </Stack>

          <Stack>
            <Card
              sx={{
                background: `url(${graphicFour})`,
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
              Packaging & Covers
            </Typography>
            <Typography variant='body' width='300px'>
              <Button sx={{ color: 'black' }}>Packaging & Label Design </Button>{' '}
              <br />
              <Button sx={{ color: 'black' }}>Book Design</Button> <br />{' '}
              <Button sx={{ color: 'black' }}>Laptop Stickers</Button> <br />{' '}
              <Button sx={{ color: 'black' }}>Album Cover </Button>
              <br /> <Button sx={{ color: 'black' }}>
                Menu Design
              </Button> <br />{' '}
              <Button sx={{ color: 'black' }}>Cover Art</Button>
            </Typography>
          </Stack>
        </Stack> */}
      </Box>
    </div>
  );
}

export default WebDesignPageCards;
