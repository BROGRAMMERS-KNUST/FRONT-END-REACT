import { Button, Modal } from '@mui/material';
import React, { useState } from 'react';
import { Box } from '@mui/system';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import SignInOut from '../Header/SignInOut';

const GetStarted = () => {
  const user = useState(JSON.parse(localStorage.getItem('profile')));
  const [open, setOpen] = useState(false);
  return (
    <Box sx={{ display: 'flex', marginTop: 2 }}>
      <Button
        sx={{
          marginTop: 0.8,
          borderRadius: 2,
          fontFamily: 'Nunito',
          fontWeight: '700',
          padding: 2,
        }}
        size='small'
        variant='contained'
        disabled={user}
        endIcon={<KeyboardArrowRightIcon />}
        onClick={() => {
          setOpen(true);
        }}
      >
        Get Started
      </Button>

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
