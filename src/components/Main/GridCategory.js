import { Box } from '@mui/system';
import React from 'react';
import { Button, Grid, Typography } from '@mui/material';

//Icons
import LanguageIcon from '@mui/icons-material/Language';
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import PaletteIcon from '@mui/icons-material/Palette';
import TextSnippetIcon from '@mui/icons-material/TextSnippet';

const GridCategory = () => {
  return (
    <Box sx={{}}>
      <Grid container spacing={5} xs={12}>
        <Grid
          item

          //First Grid box
        >
          <Box
            sx={{
              backgroundColor: '#1976d2',
              width: '13.125rem',
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
              variant='h6'
              component='div'
              sx={{ fontFamily: 'Nunito', fontWeight: '700', marginLeft: 1.5 }}
              color='white'
            >
              Web development
            </Typography>

            <Button
              href='/webdevelopment'
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
              width: '13.125rem',
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
              variant='h6'
              component='div'
              sx={{ fontFamily: 'Nunito', fontWeight: '700', marginLeft: 1.5 }}
              color='white'
            >
              Photography&Video
            </Typography>

            <Button
              href='/photography'
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
              width: '13.125rem',
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
              variant='h6'
              component='div'
              sx={{ fontFamily: 'Nunito', fontWeight: '700', marginLeft: 1.5 }}
              color='white'
            >
              Catering services
            </Typography>

            <Button
              href='/food-services'
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
              width: '13.125rem',
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
              variant='h6'
              component='div'
              sx={{ fontFamily: 'Nunito', fontWeight: '700', marginLeft: 1.5 }}
              color='white'
            >
              Graphic design
            </Typography>

            <Button
              href='/graphic-design'
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
              width: '13.125rem',
              borderRadius: 2,
              boxShadow: 4,
            }}
          >
            <TextSnippetIcon
              sx={{ color: 'white', marginLeft: 1.5, marginTop: 2 }}
              fontSize='large'
            />
            <Typography
              variant='subtitle1'
              sx={{ fontFamily: 'Nunito', marginLeft: 1.5, marginTop: 1 }}
              color='white'
              gutterBottom
            >
              Writing Services
            </Typography>
            <Typography
              variant='h6'
              component='div'
              sx={{ fontFamily: 'Nunito', fontWeight: '700', marginLeft: 1.5 }}
              color='white'
            >
              Writing&Translation
            </Typography>

            <Button
              href='/writing&translation'
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
