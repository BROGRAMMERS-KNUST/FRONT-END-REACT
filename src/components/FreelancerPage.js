import {
  Avatar,
  Button,
  CssBaseline,
  IconButton,
  Paper,
  Typography,
} from '@mui/material';
import { Box } from '@mui/system';
import React, { useState } from 'react';
import avatar from '../images/pavel-anoshin-d0peGya6R5Y-unsplash.jpg';
import Rating from '@mui/material/Rating';
import CallIcon from '@mui/icons-material/Call';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import CloseIcon from '@mui/icons-material/Close';
import WorkIcon from '@mui/icons-material/Work';
function getLabelText(value) {
  return value;
}
const FreelancerPage = ({
  fullName,
  bio,
  profilePic,
  telephoneNumber,
  portfolioLink,
  whatsappLink,
  service,
}) => {
  const [value, setValue] = useState(4.5);
  getLabelText(value);
  return (
    <Box>
      <Paper
        elevation={6}
        sx={{
          width: 500,
          marginTop: 6.5,
          marginLeft: 62,
          paddingTop: 3,
        }}
      >
        <IconButton sx={{ marginLeft: 55.5, marginTop: -1.5 }}>
          <CloseIcon />
        </IconButton>
        <Avatar
          sx={{
            bgcolor: 'orange',
            top: '50%',
            marginLeft: 22,
            marginTop: 1,
            marginBottom: 3,
            width: 150,
            height: 150,
          }}
          src={profilePic}
        />

        <Typography
          sx={{ textAlign: 'center' }}
          fontSize={40}
          fontWeight='700'
          fontFamily='Nunito'
        >
          {fullName}
        </Typography>
        <Typography
          fontSize={25}
          sx={{ textAlign: 'center' }}
          color='primary'
          fontFamily='Nunito'
        >
          {service}
        </Typography>
        <CssBaseline />
        <Box sx={{ display: 'flex' }}>
          <Rating
            name='half-rating-read'
            value={value}
            precision={0.5}
            sx={{ paddingLeft: 20, marginBottom: 2 }}
            size='large'
            readOnly
            getLabelText={getLabelText}
          />

          <Typography
            sx={{ paddingLeft: 1.5 }}
            color='#646765'
            fontFamily='Nunito'
            fontWeight='700'
          >
            ({value})
          </Typography>
        </Box>
        <Typography
          sx={{ paddingLeft: 2, paddingTop: 2 }}
          color='#646765'
          fontFamily='Nunito'
          fontWeight='700'
        >
          Bio
        </Typography>
        <Typography
          sx={{ paddingLeft: 2, paddingBottom: 2 }}
          fontFamily='Nunito'
          color='#646765'
          variant='body2'
        >
          {bio}
        </Typography>

        <Typography
          sx={{ paddingLeft: 2, paddingBottom: 1 }}
          fontFamily='Nunito'
          color='#646765'
          fontWeight='700'
        >
          Portfolio
        </Typography>
        <Button
          sx={{
            borderRadius: 5,
            marginLeft: 2,
            marginBottom: 2,
            fontFamily: 'Nunito',
            fontWeight: '700',
          }}
          startIcon={<WorkIcon />}
          variant='contained'
          size='small'
        >
          Portfolio
        </Button>

        <Typography
          sx={{ paddingLeft: 2, paddingBottom: 1.2 }}
          fontFamily='Nunito'
          color='#646765'
          fontWeight='700'
        >
          Contact Me
        </Typography>

        <Box sx={{}}>
          <Button
            sx={{
              borderRadius: 5,
              marginLeft: 2,
              marginBottom: 5,
              fontFamily: 'Nunito',
              fontWeight: '700',
            }}
            startIcon={<CallIcon />}
            variant='contained'
            size='small'
          >
            Call
          </Button>

          <Button
            sx={{
              borderRadius: 5,
              marginBottom: 5,
              marginLeft: 2,
              backgroundColor: '#1DA427',
              ':hover': { backgroundColor: '#17761E' },
              fontFamily: 'Nunito',
              fontWeight: '700',
            }}
            startIcon={<WhatsAppIcon />}
            variant='contained'
            size='small'
          >
            WhatsApp
          </Button>

          {/* <Button
            sx={{
              borderRadius: 5,
              marginLeft: 2,
              marginBottom: 5,
              fontFamily: 'Nunito',
              fontWeight: '700',
            }}
            size='small'
            startIcon={<TelegramIcon />}
            variant='contained'
          >
            Telegram
          </Button>
          */}
        </Box>
      </Paper>
    </Box>
  );
};

export default FreelancerPage;
