import React from 'react';
import { Box, Container, Stack, Card, Link, Typography } from '@mui/material';
import Albert from '../../images/Team/Albert.jpg';
import Kusi from '../../images/Team/Kusi.jpg';
import Timothy from '../../images/Team/Timothy.jpg';
import Barnes from '../../images/Team/Barnes.jpg';
import NBA from '../../images/Team/NBA.jpg';
import Wallace from '../../images/Team/Wallace.jpg';
import Wassem from '../../images/Team/Wassem-Darkwa.jpg';
import King from '../../images/Team/King.jpg';
import EMMA from '../../images/Team/EMMA.jpg';
import Moses from '../../images/Team/Moses.jpg';
import Maxwell from '../../images/Team/MAXWELL.jpg';
import { GitHub, Telegram, WhatsApp } from '@mui/icons-material';

const BoxThree = () => {
  return (
    <div>
      <Box
        bgcolor='#4682B4'
        sx={{
          color: 'white',
          padding: '15px',
          paddingLeft: 4.5,
        }}
      >
        <Container sx={{ marginLeft: 13.8 }}>
          <Typography
            sx={{
              fontFamily: 'Nunito',
              fontWeight: '700',
            }}
            marginTop={10}
            variant='h3'
            fontWeight='bold'
          >
            StuLancer Team
          </Typography>
          <Typography
            variant='body1'
            marginTop={1}
            borderBottom='solid 1px #F5F5F5'
            paddingBottom={2}
            sx={{
              fontFamily: 'Nunito',
            }}
          >
            StuLancer is maintained by a group of invaluable core contributors
            <br />
            {/* <Button
              href="/about-us_individual-roles"
              variant="contained"
              endIcon={<ChevronRight />}
              color="secondary"
            >
              See Individual Roles
            </Button> */}
          </Typography>
        </Container>

        {/* ALBERT'S STACK */}

        <Stack marginLeft={14} direction='row' sx={{ flexWrap: 'wrap' }}>
          <Stack sx={{ width: 200, margin: 2 }}>
            <Card
              sx={{
                background: `url(${Albert})`,
                backgroundSize: 'cover',
                width: 200,
                height: 150,
              }}
            />

            <Typography
              sx={{
                fontFamily: 'Nunito',
                fontWeight: '700',
              }}
              variant='h6'
              color='secondary'
            >
              Albert Asare-Appiah
            </Typography>

            <Typography
              sx={{
                fontFamily: 'Nunito',
              }}
              variant='body1'
            >
              A third year Computer Enginering student and an aspiring software
              engineer
            </Typography>
            <Stack direction='row' spacing={1}>
              <Link
                variant='inherit'
                color='secondary'
                target='_blank'
                rel='noopener'
                href='https://github.com/ahlbherto'
              >
                {<GitHub />}
              </Link>
              <Link
                variant='inherit'
                color='secondary'
                target='_blank'
                rel='noopener'
                href='https://wa.me/0242764001'
              >
                {<WhatsApp />}
              </Link>
              <Link
                variant='inherit'
                color='secondary'
                target='_blank'
                rel='noopener'
                href='https://t.me/ahlbherto'
              >
                {<Telegram />}
              </Link>
            </Stack>
          </Stack>

          {/* WASSEM'S STACK */}

          <Stack direction='column' sx={{ width: 200, margin: 2 }}>
            <Card
              sx={{
                background: `url(${Wassem})`,
                backgroundSize: 'cover',
                width: 200,
                height: 150,
              }}
            />
            <Typography
              sx={{
                fontFamily: 'Nunito',
                fontWeight: '700',
              }}
              variant='h6'
              color='secondary'
            >
              Wassem Darkwa
            </Typography>
            <Typography
              sx={{
                fontFamily: 'Nunito',
              }}
              variant='body1'
            >
              Full Stack Web Developer
            </Typography>
            <Stack direction='row' spacing={1}>
              <Link
                variant='inherit'
                color='secondary'
                target='_blank'
                rel='noopener'
                href='https://github.com/wassem7'
              >
                {<GitHub />}
              </Link>

              <Link
                variant='inherit'
                color='secondary'
                target='_blank'
                rel='noopener'
                href='https://t.me/Wdarkwa'
              >
                {<Telegram />}
              </Link>
            </Stack>
          </Stack>

          {/* TIMOTHY'S STACK */}

          <Stack direction='column' sx={{ width: 200, margin: 2 }}>
            <Card
              sx={{
                background: `url(${Timothy})`,
                backgroundSize: 'cover',
                width: 200,
                height: 150,
              }}
            />
            <Typography
              sx={{
                fontFamily: 'Nunito',
                fontWeight: '700',
              }}
              variant='h6'
              color='secondary'
            >
              Timothy Mawuli
            </Typography>
            <Typography
              sx={{
                fontFamily: 'Nunito',
              }}
              variant='body1'
            >
              Front-end Web Developer
            </Typography>
            <Stack direction='row' spacing={1}>
              <Link
                variant='inherit'
                color='secondary'
                target='_blank'
                rel='noopener'
                href='https://github.com/Tmawuli'
              >
                {<GitHub />}
              </Link>
              <Link
                variant='inherit'
                color='secondary'
                target='_blank'
                rel='noopener'
                href='https://wa.me/0548632081'
              >
                {<WhatsApp />}
              </Link>
              <Link
                variant='inherit'
                color='secondary'
                target='_blank'
                rel='noopener'
                href='https://t.me/Juju666'
              >
                {<Telegram />}
              </Link>
            </Stack>
          </Stack>

          {/* MAXWELL'S STACK */}

          <Stack direction='column' sx={{ width: 200, margin: 2 }}>
            <Card
              sx={{
                background: `url(${Maxwell})`,
                backgroundPositionY: -20,
                backgroundSize: 'cover',
                width: 200,
                height: 150,
              }}
            />
            <Typography
              sx={{
                fontFamily: 'Nunito',
                fontWeight: '700',
              }}
              variant='h6'
              color='secondary'
            >
              Maxwell
            </Typography>
            <Typography
              sx={{
                fontFamily: 'Nunito',
              }}
              variant='body1'
            >
              Computer Enginering student
            </Typography>
          </Stack>

          {/* KUSI'S STACK */}

          <Stack direction='column' sx={{ width: 200, margin: 2 }}>
            <Card
              sx={{
                background: `url(${Kusi})`,
                backgroundSize: 'cover',
                width: 200,
                height: 150,
              }}
            />
            <Typography
              sx={{
                fontFamily: 'Nunito',
                fontWeight: '700',
              }}
              variant='h6'
              color='secondary'
            >
              Lord Kusi
            </Typography>
            <Typography
              sx={{
                fontFamily: 'Nunito',
              }}
              variant='body1'
            >
              Let me be your Spring Programmer and your Hardware Engineer
            </Typography>
          </Stack>

          {/* BARNES' STACK */}

          <Stack direction='column' sx={{ width: 200, margin: 2 }}>
            <Card
              sx={{
                background: `url(${Barnes})`,
                backgroundSize: 'cover',

                width: 200,
                height: 150,
              }}
            />
            <Typography
              sx={{
                fontFamily: 'Nunito',
                fontWeight: '700',
              }}
              variant='h6'
              color='secondary'
            >
              Barnes
            </Typography>
            <Typography
              sx={{
                fontFamily: 'Nunito',
              }}
              variant='body1'
            >
              Front End Web Developer
            </Typography>
          </Stack>

          {/* MOSES'S STACK */}

          <Stack direction='column' sx={{ width: 200, margin: 2 }}>
            <Card
              sx={{
                background: `url(${Moses})`,
                backgroundSize: 'cover',
                width: 200,
                height: 150,
              }}
            />
            <Typography
              sx={{
                fontFamily: 'Nunito',
                fontWeight: '700',
              }}
              variant='h6'
              color='secondary'
            >
              Moses
            </Typography>
            <Typography
              sx={{
                fontFamily: 'Nunito',
              }}
              variant='body1'
            >
              Computer Enginering student at KNUST
            </Typography>
          </Stack>

          {/* WALLACE'S STACK */}

          <Stack direction='column' sx={{ width: 200, margin: 2 }}>
            <Card
              sx={{
                background: `url(${Wallace})`,
                backgroundSize: 'cover',
                width: 200,
                height: 150,
              }}
            />
            <Typography
              sx={{
                fontFamily: 'Nunito',
                fontWeight: '700',
              }}
              variant='h6'
              color='secondary'
            >
              Edwin Ofori
            </Typography>
            <Typography
              sx={{
                fontFamily: 'Nunito',
              }}
              variant='body1'
            >
              A third year Computer Enginering student and an aspiring software
              engineer
            </Typography>
          </Stack>

          {/* NBA'S STACK */}

          <Stack direction='column' sx={{ width: 200, margin: 2 }}>
            <Card
              sx={{
                background: `url(${NBA})`,
                backgroundSize: 'cover',
                width: 200,
                height: 150,
              }}
            />
            <Typography
              sx={{
                fontFamily: 'Nunito',
                fontWeight: '700',
              }}
              variant='h6'
              color='secondary'
            >
              Nana Baffour Awuah
            </Typography>
            <Typography
              sx={{
                fontFamily: 'Nunito',
              }}
              variant='body1'
            >
              A third year Computer Enginering student and an aspiring software
              engineer
            </Typography>
          </Stack>

          {/* KINGSLEY'S STACK */}

          <Stack direction='column' sx={{ width: 200, margin: 2 }}>
            <Card
              sx={{
                background: `url(${King})`,
                backgroundSize: 'cover',
                width: 200,
                height: 150,
              }}
            />
            <Typography
              sx={{
                fontFamily: 'Nunito',
                fontWeight: '700',
              }}
              variant='h6'
              color='secondary'
            >
              Kinglsey
            </Typography>
            <Typography
              sx={{
                fontFamily: 'Nunito',
              }}
              variant='body1'
            >
              I ♥ writing code. I love computers and building things. I enjoy
              playing the guitar
            </Typography>
          </Stack>

          {/* CARMINE'S STACK */}

          <Stack direction='column' sx={{ width: 200, margin: 2 }}>
            <Card
              sx={{
                background: `url(${EMMA})`,
                backgroundSize: 'cover',
                width: 200,
                height: 150,
              }}
            />
            <Typography
              sx={{
                fontFamily: 'Nunito',
                fontWeight: '700',
              }}
              fontSize={18.3}
              color='secondary'
            >
              Emmanuel Twum Larbi
            </Typography>
            <Typography
              sx={{
                fontFamily: 'Nunito',
              }}
              variant='body1'
            >
              Hey there! I dabble in games-related software engineeering. I am
              the guy to call if there is an arcade tournament
            </Typography>
            <Stack direction='row' spacing={1}>
              <Link
                variant='inherit'
                color='secondary'
                target='_blank'
                rel='noopener'
                href='https://github.com/Carmpeli'
              >
                {<GitHub />}
              </Link>

              <Link
                variant='inherit'
                color='secondary'
                target='_blank'
                rel='noopener'
                href='https://t.me/C_rmine'
              >
                {<Telegram />}
              </Link>
            </Stack>
          </Stack>
        </Stack>
      </Box>
    </div>
  );
};

export default BoxThree;
