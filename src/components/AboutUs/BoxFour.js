import { Card, Stack, Typography, Box } from '@mui/material';
import React from 'react';
import { Feedback, MonetizationOn, People } from '@mui/icons-material';
import pattern from '../../images/TribalPattern11.jpg';
const BoxFour = () => {
  return (
    <Box
      bgcolor='#F5F5F5'
      sx={{ padding: 15, backgroundImage: `url(${pattern})` }}
    >
      <Typography
        sx={{
          fontFamily: 'Nunito',
          fontWeight: '700',
        }}
        variant='h4'
        color='primary'
      >
        How can you support us?
      </Typography>
      <Stack direction='row' spacing='auto' paddingTop={5}>
        <Card sx={{ width: 350, padding: 2 }}>
          <Stack direction='row' spacing={2}>
            <Feedback color='secondary/' fontSize='large' />
            <Typography
              sx={{
                fontFamily: 'Nunito',
                fontWeight: '700',
              }}
              variant='h6'
              color='secondary'
            >
              Give feedback
            </Typography>
          </Stack>
          <Typography
            sx={{
              fontFamily: 'Nunito',
            }}
            variant='body1'
          >
            Tell us what and where we can improve or share your happy moments
            with us! You can also up or downvote any page on our documentation.
            And lastly, from time to time, we send our community a survey for
            more structured feedback, you're always invited to participate to
            share your thoughts.
          </Typography>
        </Card>
        <Card sx={{ width: 350, padding: 2 }}>
          <Stack direction='row' spacing={2}>
            <People fontSize='large' />
            <Typography
              sx={{
                fontFamily: 'Nunito',
                fontWeight: '700',
              }}
              variant='h6'
              color='secondary'
            >
              Join the community
            </Typography>
          </Stack>
          <Typography
            sx={{
              fontFamily: 'Nunito',
            }}
            variant='body1'
          >
            Become a member of the Stulancer Community. You can help other
            students by providing them with your knowledge and expertise. You
            can also become a member of a huge community of developers
            supporting Freelancer.
          </Typography>
        </Card>
        <Card sx={{ width: 350, padding: 2 }}>
          <Stack direction='row' spacing={2}>
            <MonetizationOn fontSize='large' />
            <Typography
              sx={{
                fontFamily: 'Nunito',
                fontWeight: '700',
              }}
              variant='h6'
              color='secondary'
            >
              Support us financially
            </Typography>
          </Stack>
          <Typography
            sx={{
              fontFamily: 'Nunito',
            }}
            variant='body1'
          >
            You can show your gratitude by donating money to the students who
            worked tirelessly to make this project a succes. Mobile Money
            Number: <em>0242764001</em> Reference:<em>Stulancer</em>
          </Typography>
        </Card>
      </Stack>
    </Box>
  );
};

export default BoxFour;
