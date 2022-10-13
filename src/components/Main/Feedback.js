import { Button, Modal } from '@mui/material';
import React, { useState } from 'react';
import { Box } from '@mui/system';
import CustomizedInputBase from './CustomizedInputBase';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import SignInOut from '../Header/SignInOut';

const Feedback = () => {
  const user = useState(JSON.parse(localStorage.getItem('profile')));
  const [open, setOpen] = useState(false);
  return (
    <Box>
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
          endIcon={<KeyboardArrowRightIcon />}
          onClick={() => {
            setOpen(true);
          }}
        >
          Feedback
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
    </Box>
  );
};

export default Feedback;
