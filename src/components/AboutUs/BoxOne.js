import React from "react";
import { Box, Typography, Card, Stack, Grid } from "@mui/material";

const BoxOne = () => {
  return (
    <Box>
      {/* FIRST BOX */}
      <Box
        sx={{
          color: "primary",
          height: "80vh",
          padding: "15px",
        }}
      >
        <Grid width={600} margin="auto">
          <Typography
            variant="subtitle1"
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
        <Stack direction="row" spacing={0}>
          <Card
            sx={{
              background:
                "url('https://th.bing.com/th/id/R.d6b7eeb68cc5706c6834c7a8e728e907?rik=x1zgW0k9qfD4yw&pid=ImgRaw&r=0') ",

              backgroundSize: "cover",
              width: 50,
              height: 50,
              marginTop: "100px",
              marginLeft: "100px",
            }}
          ></Card>
          <Card
            sx={{
              background:
                "url('https://th.bing.com/th/id/R.d6b7eeb68cc5706c6834c7a8e728e907?rik=x1zgW0k9qfD4yw&pid=ImgRaw&r=0') ",
              backgroundSize: "cover",
              width: 50,
              height: 50,
            }}
          ></Card>
        </Stack>
      </Box>
    </Box>
  );
};

export default BoxOne;
