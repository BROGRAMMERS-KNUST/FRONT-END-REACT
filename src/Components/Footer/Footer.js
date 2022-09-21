import { Box, Typography } from "@mui/material";
import React from "react";

const Footer = () => {
  return (
    <Box
      className="footer"
      sx={{
        backgroundColor: "#1976d2",
        boxShadow: 4,
        bottom: 0,
        padding: 2,
      }}
    >
      <Typography variant="h5" textAlign={"center"}>
        StuLancer
      </Typography>
      <Typography variant="h5" textAlign={"center"}>
        Brogrammers
      </Typography>
      <Typography variant="h5" textAlign={"center"}>
        Copyright 2022
      </Typography>
    </Box>
  );
};

export default Footer;
