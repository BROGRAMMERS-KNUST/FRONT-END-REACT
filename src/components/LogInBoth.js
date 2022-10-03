import { Paper, Tab, Tabs, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useState } from 'react';
import LoginHirer from './Auth/LoginHirer';
import LoginServicer from './Auth/LoginServicer';

//Modal for Sign in and Sign up page
const LoginInBoth = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const paperStyle = {
    width: '400px',
    margin: '60px auto',
  };
  function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
      <div
        role='tabpanel'
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }
  return (
    <Paper style={paperStyle} elevation={10}>
      <Tabs
        value={value}
        indicatorColor='primary'
        textColor='primary'
        onChange={handleChange}
        centered
      >
        <Tab sx={{ fontFamily: 'Nunito', fontWeight: '700' }} label='Hirer' />
        <Tab
          sx={{ fontFamily: 'Nunito', fontWeight: '700' }}
          label='StuLancer'
        />
      </Tabs>

      <TabPanel value={value} index={0}>
        <LoginHirer />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <LoginServicer />
      </TabPanel>
    </Paper>
  );
};

export default LoginInBoth;
