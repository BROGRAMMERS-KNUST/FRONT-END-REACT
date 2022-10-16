import React from 'react';
import {
  Card,
  CardContent,
  Typography,
  Rating,
  Box,
  Modal,
  IconButton,
  Button,
  Avatar,
  Paper,
  CardHeader,
  CardMedia,
} from '@mui/material';
import Carousel from 'react-material-ui-carousel';
import { useState } from 'react';
import CloseIcon from '@mui/icons-material/Close';
import GradeRoundedIcon from '@mui/icons-material/GradeRounded';
import CallIcon from '@mui/icons-material/Call';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import WorkIcon from '@mui/icons-material/Work';
function getLabelText(value) {
  return value;
}
const StulancerComp = ({ stulancer }) => {
  const [value, setValue] = useState(4.5);
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
  getLabelText(value);
  const [open, setOpen] = useState(false);

  return (
    <Box>
      <Box>
        <Card
          sx={{
            width: 320,

            ':hover': { cursor: 'pointer' },
            boxShadow: 4,
          }}
          onClick={() => {
            setOpen(true);
          }}
        >
          <CardHeader
            avatar={
              <Avatar
                alt={stulancer.fullName}
                sx={{ bgcolor: 'primary.light' }}
                src={stulancer.profilePic}
              />
            }
            title={
              <Typography fontFamily='Nunito' fontWeight='700'>
                {stulancer.fullName}
              </Typography>
            }
            subheader={
              <Typography color='primary' fontFamily='Nunito'>
                {stulancer.service}
              </Typography>
            }
          />
          <CardMedia>
            <Carousel
              sx={{ width: 320, height: 150 }}
              indicators={false}
              autoPlay={false}
            >
              <Box
                sx={{
                  background: `url(${stulancer.brandPic1}) `,
                  width: 320,
                  height: 150,
                  backgroundPositionY: -70,
                  backgroundSize: 'cover',
                  borderRadius: 1,
                }}
              />

              <Box
                sx={{
                  background: `url(${stulancer.brandPic2}) `,
                  width: 320,
                  height: 150,
                  backgroundPositionY: -70,
                  backgroundSize: 'cover',
                  borderRadius: 1,
                }}
              />

              <Box
                sx={{
                  background: `url(${stulancer.brandPic3}) `,
                  width: 320,
                  height: 150,
                  backgroundPositionY: -70,
                  backgroundSize: 'cover',
                  borderRadius: 1,
                }}
              />
            </Carousel>
          </CardMedia>
          <CardContent>
            <Box sx={{ display: 'flex', marginBottom: -1 }}>
              <GradeRoundedIcon color='secondary' fontSize='17' />
              <Typography
                sx={{ fontSize: 13 }}
                fontFamily='Nunito'
                fontWeight='700'
                color='#646765'
              >
                (4.5)
              </Typography>

              <Typography
                sx={{ fontSize: 13.0, marginLeft: 16 }}
                fontFamily='Nunito'
                fontWeight='700'
                color='#646765'
              >
                STARTING AT {stulancer.startingPrice}
              </Typography>
            </Box>
          </CardContent>
        </Card>
      </Box>
      {/*MODAL FOR STULANCER*/}
      <Modal
        open={open}
        onClose={() => {
          setOpen(false);
        }}
      >
        {/*Freelancer modal,cannot be in a separate component because of close button */}
        <Paper
          elevation={6}
          sx={{
            width: 500,
            marginTop: 5,
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
          {user ? (
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
                href={stulancer.whatsappLink}
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
          ) : (
            <Box>
              <Typography
                sx={{
                  paddingLeft: 2,
                  paddingBottom: 1,
                  ':hover': { cursor: 'pointer', textDecoration: 'underline' },
                }}
                fontFamily='Nunito'
                color='primary'
                fontWeight='700'
              >
                Login to see contact info
              </Typography>
            </Box>
          )}
        </Paper>
      </Modal>
    </Box>
  );
};

export default StulancerComp;
