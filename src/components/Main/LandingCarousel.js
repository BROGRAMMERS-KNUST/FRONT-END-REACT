import React from 'react';
import { Box, Button, Grid, Typography } from '@mui/material';
import Carousel from 'react-material-ui-carousel';
import bgpic from '../../images/hanny-naibaho-aWXVxy8BSzc-unsplash.jpg';
import bgpic1 from '../../images/mandalas-1084082.jpg';
import bgpic2 from '../../images/Fotolia_45501220_Subscription_XL.jpg';
import bgpic3 from '../../images/macarons-2548827.jpg';
import Search from './Search';
const LandingCarousel = () => {
  return (
    <Box
      sx={{
        marginTop: 10,
        marginLeft: 5,
        marginRight: 5,
      }}
    >
      <Carousel autoPlay={true}>
        <Box
          sx={{
            background: `url(${bgpic})`,

            backgroundSize: 'cover',
            color: 'white',
            height: '520px',
            width: '93vw',
            borderRadius: '20px ',
            marginTop: 1,
            marginBottom: 5,
            marginLeft: 0.5,
          }}
        >
          <Typography
            variant='h1'
            letterSpacing={2.5}
            sx={{
              fontFamily: 'Nunito',
              textAlign: 'center',
              paddingTop: 12,
              marginBottom: -5,
              fontWeight: '700',
            }}
          >
            Hire the <span className='highlight2'>best</span>
          </Typography>
          <Typography
            variant='h1'
            letterSpacing={2.3}
            sx={{
              fontFamily: 'Nunito',
              textAlign: 'center',
              paddingTop: 3,
              fontWeight: '700',
            }}
          >
            <span className='highlight2'>freelancer</span> online
          </Typography>
          <Typography
            variant='h4'
            letterSpacing={2.0}
            sx={{
              fontFamily: 'Nunito',
              textAlign: 'center',
              fontWeight: '100',
            }}
          >
            Turn your ideas into a reality
          </Typography>
          <Search />
        </Box>

        <Box
          sx={{
            background: `url(${bgpic1})`,

            backgroundSize: 'cover',
            color: 'white',
            height: '520px',
            width: '93vw',
            borderRadius: '20px ',
            marginTop: 1,
            marginBottom: 5,
            marginLeft: 0.5,
          }}
        >
          <Typography
            variant='h1'
            letterSpacing={2.5}
            sx={{
              fontFamily: 'Nunito',
              textAlign: 'center',
              paddingTop: 12,
              marginBottom: -5,
              fontWeight: '700',
            }}
          >
            Hire the <span className='highlight'>best</span>
          </Typography>
          <Typography
            variant='h1'
            letterSpacing={2.3}
            sx={{
              fontFamily: 'Nunito',
              textAlign: 'center',
              paddingTop: 3,
              fontWeight: '700',
            }}
          >
            <span className='highlight'>freelancer</span> online
          </Typography>
          <Typography
            variant='h4'
            letterSpacing={2.0}
            sx={{
              fontFamily: 'Nunito',
              textAlign: 'center',
              fontWeight: '100',
            }}
          >
            Turn your ideas into a reality
          </Typography>
          <Search />
        </Box>

        <Box
          sx={{
            background: `url(${bgpic2})`,
            backgroundSize: 'cover',
            color: 'white',
            height: '520px',
            width: '93vw',
            borderRadius: '20px ',
            marginTop: 1,
            marginBottom: 5,
            marginLeft: 0.5,
          }}
        >
          <Typography
            variant='h1'
            letterSpacing={2.5}
            sx={{
              fontFamily: 'Nunito',
              textAlign: 'center',
              paddingTop: 12,
              marginBottom: -5,
              fontWeight: '700',
            }}
          >
            Hire the <span className='highlight3'>best</span>
          </Typography>
          <Typography
            variant='h1'
            letterSpacing={2.3}
            sx={{
              fontFamily: 'Nunito',
              textAlign: 'center',
              paddingTop: 3,
              fontWeight: '700',
            }}
          >
            <span className='highlight3'>freelancer</span> online
          </Typography>
          <Typography
            variant='h4'
            letterSpacing={2.0}
            sx={{
              fontFamily: 'Nunito',
              textAlign: 'center',
              fontWeight: '100',
            }}
          >
            Turn your ideas into a reality
          </Typography>
          <Search />
        </Box>
        <Box
          sx={{
            background: `url(${bgpic3})`,

            backgroundSize: 'cover',
            color: 'white',
            height: '520px',
            width: '93vw',
            borderRadius: '20px ',
            marginTop: 1,
            marginBottom: 5,
            marginLeft: 0.5,
          }}
        >
          <Typography
            variant='h1'
            letterSpacing={2.5}
            sx={{
              fontFamily: 'Nunito',
              textAlign: 'center',
              paddingTop: 12,
              marginBottom: -5,
              fontWeight: '700',
            }}
          >
            Hire the <span className='highlight1'>best</span>
          </Typography>
          <Typography
            variant='h1'
            letterSpacing={2.3}
            sx={{
              fontFamily: 'Nunito',
              textAlign: 'center',
              paddingTop: 3,
              fontWeight: '700',
            }}
          >
            <span className='highlight1'>freelancer</span> online
          </Typography>
          <Typography
            variant='h4'
            letterSpacing={2.0}
            sx={{
              fontFamily: 'Nunito',
              textAlign: 'center',
              fontWeight: '100',
            }}
          >
            Turn your ideas into a reality
          </Typography>
          <Search />
        </Box>
      </Carousel>
    </Box>
  );
};

export default LandingCarousel;
