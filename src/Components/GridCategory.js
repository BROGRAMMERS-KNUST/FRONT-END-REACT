import { Box } from '@mui/system';
import React from 'react';
import { Button, Grid, Typography } from '@mui/material';

//Icons
import LanguageIcon from '@mui/icons-material/Language';
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import PaletteIcon from '@mui/icons-material/Palette';
import MicIcon from '@mui/icons-material/Mic';

const GridCategory = () => {
  return (
    <Box>
      <Grid container spacing={6} flexWrap>
        <Grid
          item
          //Firsr Grid box
        >
          <Box
            sx={{
              backgroundColor: '#1976d2',
              width: 250,
              borderRadius: 2,
              boxShadow: 4,
            }}
          >
            <LanguageIcon
              sx={{ color: 'white', marginLeft: 1.5, marginTop: 2 }}
              fontSize='large'
            />
            <Typography
              variant='subtitle1'
              sx={{ fontFamily: 'Nunito', marginLeft: 1.5, marginTop: 1 }}
              color='white'
              gutterBottom
            >
              Build your websites
            </Typography>
            <Typography
              variant='h5'
              component='div'
              sx={{ fontFamily: 'Nunito', fontWeight: '700', marginLeft: 1.5 }}
              color='white'
            >
              Web development
            </Typography>

            <Button
              sx={{
                backgroundColor: 'white',
                ':hover': { backgroundColor: 'white' },
                fontFamily: 'Nunito',
                fontWeight: '700',
                margin: 1.5,
                marginBottom: 2,
              }}
              size='small'
            >
              Learn More
            </Button>
          </Box>
        </Grid>

        <Grid
          item
          //Second Grid box
        >
          <Box
            sx={{
              backgroundColor: '#1976d2',
              width: 250,
              borderRadius: 2,
              boxShadow: 4,
            }}
          >
            <CameraAltIcon
              sx={{ color: 'white', marginLeft: 1.5, marginTop: 2 }}
              fontSize='large'
            />
            <Typography
              variant='subtitle1'
              sx={{ fontFamily: 'Nunito', marginLeft: 1.5, marginTop: 1 }}
              color='white'
              gutterBottom
            >
              Wear a smile
            </Typography>
            <Typography
              variant='h5'
              component='div'
              sx={{ fontFamily: 'Nunito', fontWeight: '700', marginLeft: 1.5 }}
              color='white'
            >
              Photography
            </Typography>

            <Button
              sx={{
                backgroundColor: 'white',
                ':hover': { backgroundColor: 'white' },
                fontFamily: 'Nunito',
                fontWeight: '700',
                margin: 1.5,
                marginBottom: 2,
              }}
              size='small'
            >
              Learn More
            </Button>
          </Box>
        </Grid>

        <Grid
          item
          //Third Grid box
        >
          <Box
            sx={{
              backgroundColor: '#1976d2',
              width: 250,
              borderRadius: 2,
              boxShadow: 4,
            }}
          >
            <RestaurantIcon
              sx={{ color: 'white', marginLeft: 1.5, marginTop: 2 }}
              fontSize='large'
            />
            <Typography
              variant='subtitle1'
              sx={{ fontFamily: 'Nunito', marginLeft: 1.5, marginTop: 1 }}
              color='white'
              gutterBottom
            >
              Food services
            </Typography>
            <Typography
              variant='h5'
              component='div'
              sx={{ fontFamily: 'Nunito', fontWeight: '700', marginLeft: 1.5 }}
              color='white'
            >
              Catering services
            </Typography>

            <Button
              sx={{
                backgroundColor: 'white',
                ':hover': { backgroundColor: 'white' },
                fontFamily: 'Nunito',
                fontWeight: '700',
                margin: 1.5,
                marginBottom: 2,
              }}
              size='small'
            >
              Learn More
            </Button>
          </Box>
        </Grid>

        <Grid
          item
          //Fourth Grid box
        >
          <Box
            sx={{
              backgroundColor: '#1976d2',
              width: 250,
              borderRadius: 2,
              boxShadow: 4,
            }}
          >
            <PaletteIcon
              sx={{ color: 'white', marginLeft: 1.5, marginTop: 2 }}
              fontSize='large'
            />
            <Typography
              variant='subtitle1'
              sx={{ fontFamily: 'Nunito', marginLeft: 1.5, marginTop: 1 }}
              color='white'
              gutterBottom
            >
              Digital art services
            </Typography>
            <Typography
              variant='h5'
              component='div'
              sx={{ fontFamily: 'Nunito', fontWeight: '700', marginLeft: 1.5 }}
              color='white'
            >
              Graphic design
            </Typography>

            <Button
              sx={{
                backgroundColor: 'white',
                ':hover': { backgroundColor: 'white' },
                fontFamily: 'Nunito',
                fontWeight: '700',
                margin: 1.5,
                marginBottom: 2,
              }}
              size='small'
            >
              Learn More
            </Button>
          </Box>
        </Grid>

        <Grid
          item
          //Fifth Grid box
        >
          <Box
            sx={{
              backgroundColor: '#1976d2',
              width: 250,
              borderRadius: 2,
              boxShadow: 4,
            }}
          >
            <MicIcon
              sx={{ color: 'white', marginLeft: 1.5, marginTop: 2 }}
              fontSize='large'
            />
            <Typography
              variant='subtitle1'
              sx={{ fontFamily: 'Nunito', marginLeft: 1.5, marginTop: 1 }}
              color='white'
              gutterBottom
            >
              Audio recording services
            </Typography>
            <Typography
              variant='h5'
              component='div'
              sx={{ fontFamily: 'Nunito', fontWeight: '700', marginLeft: 1.5 }}
              color='white'
            >
              Voice over
            </Typography>

            <Button
              sx={{
                backgroundColor: 'white',
                ':hover': { backgroundColor: 'white' },
                fontFamily: 'Nunito',
                fontWeight: '700',
                margin: 1.5,
                marginBottom: 2,
              }}
              size='small'
            >
              Learn More
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default GridCategory;
