import {
  Button,
  Grid,
  IconButton,
  Modal,
  Paper,
  Typography,
} from '@mui/material';
import React, { useState } from 'react';
import { Box } from '@mui/system';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import CloseIcon from '@mui/icons-material/Close';
import { CheckCircleOutlineRounded } from '@mui/icons-material';

const Requirements = () => {
  const [open, setOpen] = useState(false);

  const paperStyle = {
    padding: 20,
    fontFamily: 'Nunito',
    fontWeight: '700',
    width: 510,
    margin: '50px auto',
  };
  return (
    <Box>
      <Box sx={{ display: 'flex', marginTop: 2 }}>
        <Button
          sx={{
            marginTop: 0.8,
            borderRadius: 2,
            fontFamily: 'Nunito',
            fontWeight: '700',
            padding: 1.5,
            backgroundColor: '#ECBC1C',
            '&:hover': { backgroundColor: '#E2B319' },
          }}
          size='small'
          variant='contained'
          endIcon={<KeyboardArrowRightIcon />}
          onClick={() => {
            setOpen(true);
          }}
        >
          Requirements
        </Button>

        <Modal
          open={open}
          onClose={() => {
            setOpen(false);
          }}
        >
          <Paper style={paperStyle} elevation={6}>
            <IconButton
              onClick={() => {
                setOpen(false);
              }}
              sx={{ marginLeft: 55, marginTop: -1.5 }}
            >
              <CloseIcon />
            </IconButton>
            <Grid item align='center'>
              <Typography
                variant='h4'
                color='primary'
                sx={{
                  fontFamily: 'Nunito',
                  fontWeight: '700',

                  marginBottom: 3.5,
                }}
              >
                Stulancer Requirements
              </Typography>
            </Grid>
            <Typography
              variant='h6'
              marginTop={1}
              color='#6e6e6e'
              fontWeight='bold'
              marginBottom={3.2}
              sx={{
                fontFamily: 'Nunito',
              }}
            >
              <CheckCircleOutlineRounded color='secondary' />
              Email address for signing up
            </Typography>
            <Typography
              variant='h6'
              fontWeight='bold'
              marginTop={1}
              color='#6e6e6e'
              marginBottom={3.1}
              sx={{
                fontFamily: 'Nunito',
              }}
            >
              <CheckCircleOutlineRounded color='secondary' />
              Profile picture
            </Typography>

            <Typography
              variant='h6'
              marginTop={1}
              fontWeight='bold'
              marginBottom={3.1}
              color='#6e6e6e'
              sx={{
                fontFamily: 'Nunito',
              }}
            >
              <CheckCircleOutlineRounded color='secondary' />
              WhatsApp Business link
            </Typography>

            <Typography
              variant='h6'
              marginTop={1}
              fontWeight='bold'
              marginBottom={3.1}
              color='#6e6e6e'
              sx={{
                fontFamily: 'Nunito',
              }}
            >
              <CheckCircleOutlineRounded color='secondary' />
              Porfolio Link eg.Behance page,dribble page,Instagram page Link
            </Typography>
            <Typography
              variant='h6'
              fontWeight='bold'
              marginTop={1}
              marginBottom={3.1}
              color='#6e6e6e'
              sx={{
                fontFamily: 'Nunito',
              }}
            >
              <CheckCircleOutlineRounded color='secondary' />3 brand pictures
            </Typography>

            <Typography
              variant='h6'
              fontWeight='bold'
              marginTop={1}
              marginBottom={3.1}
              color='#6e6e6e'
              sx={{
                fontFamily: 'Nunito',
              }}
            >
              <CheckCircleOutlineRounded color='secondary' />
              Starting price in Ghana cedis
            </Typography>

            <Typography
              variant='h6'
              fontWeight='bold'
              marginTop={1}
              marginBottom={3.1}
              color='#6e6e6e'
              sx={{
                fontFamily: 'Nunito',
              }}
            >
              <CheckCircleOutlineRounded color='secondary' />
              Check if your service is amongst those offered on StuLancer at the
              moment <br />
              <span className='h6' fontFamily='Nunito'>
                (more services would be added soon)
              </span>
            </Typography>
          </Paper>
        </Modal>
      </Box>
    </Box>
  );
};

export default Requirements;
