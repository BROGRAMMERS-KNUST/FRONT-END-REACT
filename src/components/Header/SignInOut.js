import { Paper, Tab, Tabs, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import SignUp from "../Auth/SignUp";
import SignUpService from "../Auth/SignUpService";

//Modal for Sign in and Sign up page
const SignInOut = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const paperStyle = {
    width: "400px",
    margin: "60px auto",
  };
  function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        StuLancer
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
        indicatorColor="primary"
        textColor="primary"
        onChange={handleChange}
        centered
      >
        <Tab
          sx={{ fontFamily: "Nunito", fontWeight: "700" }}
          label="Hire a StuLancer"
        />
        <Tab
          sx={{ fontFamily: "Nunito", fontWeight: "700" }}
          label="Be a StuLancer"
        />
      </Tabs>

      <TabPanel value={value} index={0}>
        <SignUp />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <SignUpService />
      </TabPanel>
    </Paper>
  );
};

export default SignInOut;
