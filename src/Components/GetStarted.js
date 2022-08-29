import { Button } from '@mui/material';
import React from 'react';
import { Box } from '@mui/system';
import CustomizedInputBase from './CustomizedInputBase';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

const GetStarted = () => {
  return (
    <Box sx={{ display: 'flex', marginTop: 2 }}>
      <Button
        sx={{
          marginTop: 2,
          borderRadius: 2,
          fontFamily: 'Nunito',
          fontWeight: '700',
        }}
        size='small'
        variant='contained'
        endIcon={<KeyboardArrowRightIcon />}
      >
        Get Started
      </Button>

      <CustomizedInputBase />
    </Box>
  );
};

export default GetStarted;
