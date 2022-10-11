import React from "react";
import { Box, Typography, Card, Stack, Grid } from "@mui/material";

const BoxOne = () => {
  return (
    <Box>
      {/* FIRST BOX */}
      <Box
        bgcolor="#F5F5F5"
        sx={{
          color: "primary",
          height: "75vh",
          padding: "15px",
        }}
      >
        <Grid width={600} margin="auto">
          <Typography
            variant="h6"
            align="center"
            color="secondary"
            sx={{
              marginTop: 20,
              marginLeft: 4,
              marginRight: 4,
              fontFamily: "Nunito",
              fontWeight: "bold",
            }}
          >
            About Us
          </Typography>
          <Typography
            variant="h4"
            align="center"
            sx={{
              fontFamily: "Nunito",
              marginLeft: 4,
              marginRight: 4,
            }}
            fontWeight="bold"
            color="primary"
          >
            We are on a mision to help students hone their skills by providing a
            freelancing platform
          </Typography>
          <Typography
            variant="body1"
            align="center"
            marginBottom={6}
            fontWeight="bold"
          >
            Our mission is reduce the hassle of finding reliable services on
            campus
          </Typography>
        </Grid>
      </Box>
    </Box>
  );
};

export default BoxOne;
