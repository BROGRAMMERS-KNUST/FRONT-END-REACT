import React from 'react';
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Rating,
  Box,
  Modal,
  IconButton,
  BoxIconButton,
  Button,
  Avatar,
  Paper,
} from '@mui/material';
import { useState } from 'react';
import FreelancerPage from './FreelancerPage';
import CloseIcon from '@mui/icons-material/Close';

import CallIcon from '@mui/icons-material/Call';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

import WorkIcon from '@mui/icons-material/Work';
function getLabelText(value) {
  return value;
}
const StulancerComp = ({ stulancer }) => {
  const [value, setValue] = useState(4.5);
  getLabelText(value);
  const [open, setOpen] = useState(false);

  return (
    <Box>
      <Card
        sx={{ width: 200, ':hover': { cursor: 'pointer' } }}
        onClick={() => {
          setOpen(true);
        }}
      >
        <CardMedia title={stulancer.username} image={stulancer.profilepic} />
        <div>
          <Typography variant='h6'>{stulancer.fullName}</Typography>
          <Typography variant='body2'>{stulancer.brandName}</Typography>
        </div>
        <div>
          <Typography variant='body2' color='textSecondary'>
            {stulancer.serviceTags.map((tag) => `${tag} `)}
          </Typography>
        </div>
        <div>
          <CardContent>
            <Typography gutterBottom>{stulancer.profileDescription}</Typography>
          </CardContent>
        </div>
        <Rating name='read-only' value={stulancer.rating} readOnly />
        {stulancer.rating}
      </Card>

      <Modal
        open={open}
        onClose={() => {
          setOpen(false);
        }}
      >
        <Paper
          elevation={6}
          sx={{
            width: 500,
            marginTop: 6.5,
            marginLeft: 62,
            paddingTop: 3,
          }}
        >
          <IconButton
            onClick={() => {
              setOpen(false);
            }}
            sx={{ marginLeft: 55.5, marginTop: -1.5 }}
          >
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
            src={stulancer.profilePic}
          />

          <Typography
            sx={{ textAlign: 'center' }}
            fontSize={40}
            fontWeight='700'
            fontFamily='Nunito'
          >
            {stulancer.fullName}
          </Typography>
          <Typography
            fontSize={25}
            sx={{ textAlign: 'center' }}
            color='primary'
            fontFamily='Nunito'
          >
            {stulancer.service}
          </Typography>

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
            {stulancer.bio}
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
          </Box>
        </Paper>
      </Modal>
    </Box>
  );
};

export default StulancerComp;
