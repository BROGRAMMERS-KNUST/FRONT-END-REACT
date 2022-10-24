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
              borderRadius: 2,
              p: 2,
              width: '11.5vw',
            }}
          >
            <MonitorIcon color='primary' /> Front End Dev
          </Box>
          <Box
            sx={{
              bgcolor: 'background.paper',
              boxShadow: 2,
              borderRadius: 2,
              p: 2,
              width: '11.5vw',
            }}
          >
            <DisplaySettingsIcon color='primary' /> Back End Dev
          </Box>
          <Box
            sx={{
              bgcolor: 'background.paper',
              boxShadow: 2,
              borderRadius: 2,
              p: 2,
              width: '10vw',
            }}
          >
            <DesignServicesIcon color='primary' /> UI/UX
          </Box>
          <Box
            sx={{
              bgcolor: 'background.paper',
              boxShadow: 2,
              borderRadius: 2,
              p: 2,
              width: '11.5vw',
            }}
          >
            <EngineeringIcon color='primary' /> DevOps
          </Box>
          <Box
            sx={{
              bgcolor: 'background.paper',
              boxShadow: 2,
              borderRadius: 2,
              p: 2,
              width: '13vw',
            }}
          >
            <ManageAccountsIcon color='primary' /> Project Manager
          </Box>
          <Box
            sx={{
              bgcolor: 'background.paper',
              boxShadow: 2,
              borderRadius: 2,
              p: 2,
              width: '13vw',
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
