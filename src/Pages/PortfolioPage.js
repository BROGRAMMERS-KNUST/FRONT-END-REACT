import {
  Button,
  Grid,
  Paper,
  Typography,
  Box,
  Card,
  Modal,
  Tooltip,
  IconButton,
  TextField,
} from '@mui/material';
import React from 'react';
import PortfolioPic from '../images/images_3.png';
import { useState } from 'react';
import Carousel from 'react-material-ui-carousel';
import Resizer from 'react-image-file-resizer';
import CloseIcon from '@mui/icons-material/Close';
import PaidRoundedIcon from '@mui/icons-material/PaidRounded';
import { updatebrandpics, updatestartingprice } from '../action/auth';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
const PortfolioPage = () => {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
  const [open, setOpen] = useState(false);
  const [open1, setOpen1] = useState(false);
  const dispatch = useDispatch();
  const history = useHistory();
  const paperStyle = {
    padding: 20,
    fontFamily: 'Nunito',
    fontWeight: '700',
    width: 400,
    margin: '100px auto',
  };

  const paperStyle1 = {
    padding: 20,
    fontFamily: 'Nunito',
    fontWeight: '700',
    width: 400,
    margin: '100px auto',
  };
  const freelancerData = {
    brandPic1: user.result.brandPic1,
    brandPic2: user.result.brandPic2,
    brandPic3: user.result.brandPic3,
  };

  const startingPrice = {
    startingPrice: user.result.startingPrice,
  };

  let freelancerId = null;

  //handle submit for starting price only
  const handleSubmit1 = (e) => {
    e.preventDefault();
    freelancerId = user.result._id;

    dispatch(updatestartingprice(startingPrice, history, freelancerId));
    console.log(freelancerData);
  };

  //handle sumbit for brand pics only
  const handleSubmit = (e) => {
    e.preventDefault();
    freelancerId = user.result._id;

    dispatch(updatebrandpics(freelancerData, history, freelancerId));
    console.log(freelancerData);
  };
  return (
    <Box sx={{ minHeight: '78vh', marginLeft: 4, marginRight: 4 }}>
      <Typography variant='h1' fontFamily='Nunito' marginTop={20} gutterBottom>
        Hello <span> </span>
        <span>StuLancer</span>
        {/*<br /> <span className='highlight1'>Freelancer</span>*/}
        <br />
        <span className='highlight1'>{user.result.fullName}</span>
      </Typography>
      <img className='PortfolioPic' src={PortfolioPic} alt='3D model' />
      <Typography variant='h4' fontFamily='Nunito'>
        Welcome to your portfolio page
      </Typography>
      <Grid container spacing={6} flexWrap>
        {/*First Grid box */}
        <Grid item>
          <Tooltip title='Click to update Starting Price'>
            <Box
              sx={{
                backgroundColor: '#e14e67',
                width: 200,
                borderRadius: 2,
                boxShadow: 4,
                marginTop: 6,
                ':hover': { cursor: 'pointer' },
              }}
              onClick={() => {
                setOpen1(true);
              }}
            >
              <PaidRoundedIcon
                sx={{ color: 'white', marginLeft: 1.5, marginTop: 2 }}
                fontSize='large'
              />

              <Typography
                variant='subtitle1'
                sx={{ fontFamily: 'Nunito', marginLeft: 1.5, marginTop: 1 }}
                color='white'
                gutterBottom
              >
                Starting Price
              </Typography>
              <Typography
                variant='h5'
                component='div'
                sx={{
                  fontFamily: 'Nunito',
                  fontWeight: '700',
                  marginLeft: 1.5,
                  paddingBottom: 2,
                }}
                color='white'
              >
                GHC {user.result.startingPrice}
              </Typography>
            </Box>
          </Tooltip>
        </Grid>
        <Grid sx={{ marginTop: 5.3 }} item>
          {/*First Grid box */}
          <Tooltip title='click to update brand pictures'>
            <Card
              sx={{ ':hover': { cursor: 'pointer' }, boxShadow: 4 }}
              onClick={() => {
                setOpen(true);
              }}
            >
              <Carousel
                sx={{ width: 320, height: 150 }}
                indicators={false}
                autoPlay={true}
              >
                <Box
                  sx={{
                    background: `url(${user.result.brandPic1}) `,
                    width: 320,
                    height: 150,
                    backgroundPositionY: -70,
                    backgroundSize: 'cover',
                    borderRadius: 1,
                  }}
                />

                <Box
                  sx={{
                    background: `url(${user.result.brandPic2}) `,
                    width: 320,
                    height: 150,
                    backgroundPositionY: -70,
                    backgroundSize: 'cover',
                    borderRadius: 1,
                  }}
                />

                <Box
                  sx={{
                    background: `url(${user.result.brandPic3}) `,
                    width: 320,
                    height: 150,
                    backgroundPositionY: -70,
                    backgroundSize: 'cover',
                    borderRadius: 1,
                  }}
                />
              </Carousel>
            </Card>
          </Tooltip>
        </Grid>
      </Grid>

      {/*Modal for taking brand pics*/}
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
            sx={{ marginLeft: 41, marginTop: -1.5 }}
          >
            <CloseIcon />
          </IconButton>
          <Grid item align='center'>
            <Typography
              variant='h5'
              color='primary'
              sx={{ fontFamily: 'Nunito', fontWeight: '700', marginBottom: 3 }}
            >
              Stulancer
            </Typography>
          </Grid>
          <form onSubmit={handleSubmit}>
            <Typography
              sx={{ fontFamily: 'Nunito', color: '#666666', marginBottom: 3 }}
            >
              Upload 3 Branding Pics
            </Typography>
            <Box sx={{ marginBottom: 2 }}>
              <input
                type='file'
                onChange={(e) => {
                  try {
                    Resizer.imageFileResizer(
                      e.target.files[0],
                      320,
                      150,
                      'JPEG',
                      52,
                      0,
                      (uri) => {
                        freelancerData.brandPic1 = uri;
                      },
                      'base64',
                      200,
                      100
                    );
                  } catch (error) {
                    console.log(error);
                  }
                }}
              />
            </Box>
            <Box sx={{ marginBottom: 2 }}>
              <input
                type='file'
                onChange={(e) => {
                  try {
                    Resizer.imageFileResizer(
                      e.target.files[0],
                      320,
                      250,
                      'JPEG',
                      50,
                      0,
                      (uri) => {
                        freelancerData.brandPic2 = uri;
                      },
                      'base64',
                      200,
                      100
                    );
                  } catch (error) {
                    console.log(error);
                  }
                }}
              />
            </Box>
            <Box sx={{ marginBottom: 2 }}>
              <input
                type='file'
                onChange={(e) => {
                  try {
                    Resizer.imageFileResizer(
                      e.target.files[0],
                      320,
                      250,
                      'JPEG',
                      50,
                      0,
                      (uri) => {
                        freelancerData.brandPic3 = uri;
                      },
                      'base64',
                      200,
                      100
                    );
                  } catch (error) {
                    console.log(error);
                  }
                }}
              />
            </Box>
            <Button
              sx={{
                marginTop: 1,
                marginBottom: 2,
                fontFamily: 'Nunito',
                fontWeight: '700',
              }}
              variant='contained'
              fullWidth
              type='submit'
            >
              Sumbit
            </Button>
          </form>
        </Paper>
      </Modal>

      {/*Modal for taking starting price */}
      <Modal
        open={open1}
        onClose={() => {
          setOpen1(false);
        }}
      >
        <Paper style={paperStyle1} elevation={6}>
          <IconButton
            onClick={() => {
              setOpen1(false);
            }}
            sx={{ marginLeft: 41, marginTop: -1.5 }}
          >
            <CloseIcon />
          </IconButton>
          <Grid item align='center'>
            <Typography
              variant='h5'
              color='primary'
              sx={{ fontFamily: 'Nunito', fontWeight: '700', marginBottom: 3 }}
            >
              Stulancer
            </Typography>
          </Grid>
          <form onSubmit={handleSubmit1}>
            <TextField
              label='Starting Price'
              placeholder='Enter your starting price'
              variant='standard'
              required
              fullWidth
              defaultValue={user.result.startingPrice}
              sx={{ marginBottom: 2 }}
              onChange={(e) => {
                startingPrice.startingPrice = e.target.value;
              }}
            />
            <Button
              sx={{
                marginTop: 1,
                marginBottom: 2,
                fontFamily: 'Nunito',
                fontWeight: '700',
              }}
              variant='contained'
              fullWidth
              type='submit'
            >
              Sumbit
            </Button>
          </form>
        </Paper>
      </Modal>
    </Box>
  );
};

export default PortfolioPage;
