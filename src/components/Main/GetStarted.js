import { Button, Modal } from '@mui/material';
import React, { useState } from 'react';
import { Box } from '@mui/system';
import CustomizedInputBase from './CustomizedInputBase';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import SignInOut from '../Header/SignInOut';

const GetStarted = () => {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
  const [open, setOpen] = useState(false);
  return (
    <Box sx={{ display: 'flex', marginTop: 2 }}>
      <Button
        sx={{
          marginTop: 2,
          borderRadius: 2,
          fontFamily: 'Nunito',
          fontWeight: '700',
        }}
        disabled={user}
        size='small'
        variant='contained'
        endIcon={<KeyboardArrowRightIcon />}
        onClick={() => {
          setOpen(true);
        }}
      >
        Get Started
      </Button>

      <CustomizedInputBase />
      <Modal
        open={open}
        onClose={() => {
          setOpen(false);
        }}
      >
        <SignInOut />
      </Modal>
    </Box>
  );
};

export default GetStarted;
