import React, { useState } from 'react';
import { Box, Typography, Stack, Container, Grid } from '@mui/material';
import {
  CheckCircleOutline,
  GitHub,
  Groups,
  People,
  Twitter,
} from '@mui/icons-material';
import axios from 'axios';
import { useEffect } from 'react';

const BoxTwo = () => {
  const [numberofStuLancers, setnumberofStuLancers] = useState(0);

  const getNumberofStuLancers = async () => {
    try {
      const url = 'http://localhost:5000/user/getnumber';
      const { data } = await axios.get(url);
      setnumberofStuLancers(data.result.toString());
      console.log(`Number of StuLancers is ${data.result.toString()}`);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getNumberofStuLancers();
  }, []);

  return (
    <Box
      bgcolor='#F5F5F5'
      sx={{
        color: 'primary',
        height: '100vh',
        padding: '15px',
      }}
    >
      <Stack direction='row' spacing={25} marginTop={10} marginLeft={10}>
        <Container>
          <Typography
            sx={{
              fontFamily: 'Nunito',
              fontWeight: '700',
            }}
            variant='h3'
          >
            Our Ultimate Goal
          </Typography>
          <Typography
            variant='body1'
            marginTop={1}
            color='primary'
            fontWeight='bold'
            sx={{
              fontFamily: 'Nunito',
              fontWeight: '700',
            }}
          >
            {' '}
            We aim high trying to design the most effective and efficient
            freelancing platform for KNUST students.
            <br />
            This platform is accessible to all students, and encourages students
            to help each other through the exchange of services.
            <br />
            This will serve as a platform for students to practise what they
            have learnt and gain experience. <br />
            <br />
            <span className='bold'>
              We plan on doing all that cultivating our values:
            </span>{' '}
            <br />
          </Typography>
          <Container>
            <Typography
              variant='body1'
              fontWeight='bold'
              marginTop={1}
              color='primary'
              sx={{
                fontFamily: 'Nunito',
              }}
            >
              <CheckCircleOutline color='secondary' />
              Customer obsessed. Our customers come first at all times.
            </Typography>
            <Typography
              variant='body1'
              fontWeight='bold'
              marginTop={1}
              color='primary'
              sx={{
                fontFamily: 'Nunito',
              }}
            >
              <CheckCircleOutline color='secondary' />
              Transparency. Most of our work is public
            </Typography>
            <Typography
              variant='body1'
              fontWeight='bold'
              marginTop={1}
              color='primary'
              sx={{
                fontFamily: 'Nunito',
              }}
            >
              <CheckCircleOutline color='secondary' />
              Freedom. We work from anywhere in the world.
            </Typography>
            <Typography
              variant='body1'
              fontWeight='bold'
              marginTop={1}
              color='primary'
              sx={{
                fontFamily: 'Nunito',
              }}
            >
              <CheckCircleOutline color='secondary' />
              Autonomy. We want to create a safe, high-trust team.
            </Typography>
            <Typography
              variant='body1'
              fontWeight='bold'
              marginTop={1}
              color='primary'
              sx={{
                fontFamily: 'Nunito',
              }}
            >
              <CheckCircleOutline color='secondary' />
              Excellence. We're aiming high, and we know it.
            </Typography>
          </Container>
        </Container>
        <Container>
          <Grid>
            <Grid item marginTop={5}>
              <Typography
                sx={{
                  fontFamily: 'Nunito',
                }}
                variant='h4'
                fontWeight='bold'
                color='secondary'
              >
                {numberofStuLancers}
              </Typography>
              <People />
              <Typography
                sx={{
                  fontFamily: 'Nunito',
                }}
                variant='boby3'
                fontWeight='bold'
                color='primary'
              >
                {'  '}Number of Stulancers
              </Typography>
            </Grid>
            <Grid item marginTop={5}>
              <Typography
                sx={{
                  fontFamily: 'Nunito',
                }}
                variant='h4'
                fontWeight='bold'
                color='secondary'
              >
                10
              </Typography>
              <Twitter />
              <Typography
                sx={{
                  fontFamily: 'Nunito',
                }}
                variant='boby3'
                fontWeight='bold'
                color='primary'
              >
                {'  '}Followers on Twitter
              </Typography>
            </Grid>

            <Grid item marginTop={5}>
              <Typography
                sx={{
                  fontFamily: 'Nunito',
                }}
                variant='h4'
                fontWeight='bold'
                color='secondary'
              >
                10
              </Typography>
              <GitHub />
              <Typography
                sx={{
                  fontFamily: 'Nunito',
                }}
                variant='boby3'
                fontWeight='bold'
                color='primary'
              >
                {'  '}Stars on GitHub
              </Typography>
            </Grid>
            <Grid item marginTop={5}>
              <Typography
                sx={{
                  fontFamily: 'Nunito',
                }}
                variant='h4'
                fontWeight='bold'
                color='secondary'
              >
                11
              </Typography>
              <Groups />
              <Typography
                sx={{
                  fontFamily: 'Nunito',
                }}
                variant='boby3'
                fontWeight='bold'
                color='primary'
              >
                {'  '}Contributers
              </Typography>
            </Grid>
          </Grid>
        </Container>
      </Stack>
    </Box>
  );
};

export default BoxTwo;
