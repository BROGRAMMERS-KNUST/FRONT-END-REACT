import { Box, Typography } from "@mui/material";
import React from "react";
import LandingPic from "../../images/images_8.png";
import GetStarted from "./GetStarted";

const Background = () => {
  return (
    <Box sx={{ minHeight: "78vh", marginLeft: 4, marginRight: 4 }}>
      <Typography variant="h1" fontFamily="Nunito" marginTop={20}>
        Hire the <span> </span>
        <span className="highlight">best</span>
        <br /> <span className="highlight">Freelancer</span> online
      </Typography>
      <img className="LandingPic" src={LandingPic} alt="3D model" />
      <Typography variant="h4" fontFamily="Nunito">
        Turn your ideas into reality
      </Typography>

      <GetStarted />
    </Box>
  );
};

export default Background;
