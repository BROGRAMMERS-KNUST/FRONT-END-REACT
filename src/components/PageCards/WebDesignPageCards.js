//COMPONENTS
import React from 'react';
import { Box, Stack, Typography } from '@mui/material';
import MonitorIcon from '@mui/icons-material/Monitor';
import SourceIcon from '@mui/icons-material/Source';
import DisplaySettingsIcon from '@mui/icons-material/DisplaySettings';
import DesignServicesIcon from '@mui/icons-material/DesignServices';
import EngineeringIcon from '@mui/icons-material/Engineering';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';

function WebDesignPageCards() {
  return (
    <div>
      <Box marginLeft={1}>
        <Typography fontWeight='medium'>
          {' '}
          Most popular in Web Development
        </Typography>{' '}
        <br />
        <Stack direction='row' spacing={8.3} sx={{ flexWrap: 'nowrap' }}>
          <Box
            sx={{
              bgcolor: 'background.paper',
              boxShadow: 2,
              borderRadius: '0.8rem',
              p: '1rem',
              width: '11rem',
            }}
          >
            <MonitorIcon color='primary' /> Front End Dev
          </Box>
          <Box
            sx={{
              bgcolor: 'background.paper',
              boxShadow: 2,
              borderRadius: '0.8rem',
              p: '1rem',
              width: '10rem',
            }}
          >
            <DisplaySettingsIcon color='primary' /> Back End Dev
          </Box>
          <Box
            sx={{
              bgcolor: 'background.paper',
              boxShadow: 2,
              borderRadius: '0.8rem',
              p: '1rem',
              width: '11rem',
            }}
          >
            <DesignServicesIcon color='primary' /> UI/UX
          </Box>
          <Box
            sx={{
              bgcolor: 'background.paper',
              boxShadow: 2,
              borderRadius: '0.8rem',
              p: '1rem',
              width: '11rem',
            }}
          >
            <EngineeringIcon color='primary' /> DevOps
          </Box>
          <Box
            sx={{
              bgcolor: 'background.paper',
              boxShadow: 2,
              borderRadius: '0.8rem',
              p: '1rem',
              width: '13rem',
            }}
          >
            <ManageAccountsIcon color='primary' /> Project Manager
          </Box>
          <Box
            sx={{
              bgcolor: 'background.paper',
              boxShadow: 2,
              borderRadius: '0.8rem',
              p: '1rem',
              width: '13rem',
            }}
          >
            <SourceIcon color='primary' /> Content Developer
          </Box>
        </Stack>
      </Box>
    </div>
  );
}

export default WebDesignPageCards;
