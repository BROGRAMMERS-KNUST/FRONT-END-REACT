import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import PortfolioPic from "../images/images_3.png";
import { useState } from "react";

import StarRoundedIcon from "@mui/icons-material/StarRounded";
const PortfolioPage = () => {
  const user = useState(JSON.parse(localStorage.getItem("profile")));

  return (
    <Box sx={{ minHeight: "78vh", marginLeft: 4, marginRight: 4 }}>
      <Typography variant="h1" fontFamily="Nunito" marginTop={20} gutterBottom>
        Hello <span> </span>
        <span>StuLancer</span>
        {/*<br /> <span className='highlight1'>Freelancer</span>*/}
        <br />
        <span className="highlight1">{user.result.fullName}</span>
      </Typography>
      <img className="PortfolioPic" src={PortfolioPic} alt="3D model" />
      <Typography variant="h4" fontFamily="Nunito">
        Welcome to your portfolio page
      </Typography>
      <Grid container spacing={6} flexWrap>
        <Grid
          item
          //First Grid box
        >
          <Box
            sx={{
              backgroundColor: "#e14e67",
              width: 200,
              borderRadius: 2,
              boxShadow: 4,
              marginTop: 6,
            }}
          >
            <StarRoundedIcon
              sx={{ color: "white", marginLeft: 1.5, marginTop: 2 }}
              fontSize="large"
            />
            <Typography
              variant="subtitle1"
              sx={{ fontFamily: "Nunito", marginLeft: 1.5, marginTop: 1 }}
              color="white"
              gutterBottom
            >
              Average Rating
            </Typography>
            <Typography
              variant="h5"
              component="div"
              sx={{
                fontFamily: "Nunito",
                fontWeight: "700",
                marginLeft: 1.5,
                paddingBottom: 2,
              }}
              color="white"
            >
              4.5/5
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default PortfolioPage;
