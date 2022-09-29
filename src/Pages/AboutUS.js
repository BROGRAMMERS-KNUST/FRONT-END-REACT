import React from "react";

import {
  Box,
  Link,
  Breadcrumbs,
  Typography,
  Card,
  Stack,
  Container,
  Grid,
} from "@mui/material";
import Navbar from "../components/Header/Navbar";
import { StayPrimaryLandscape } from "@mui/icons-material";
import { hover } from "@testing-library/user-event/dist/hover";
import { CheckCircleOutline } from "@mui/icons-material";

const AboutUS = () => {
  return (
    <Box>
      <Box
        sx={{
          bgcolor: "#000050",
          color: "white",
          height: "80vh",
          padding: "15px",
          "&:hover": {
            bgcolor: "#000057",
          },
        }}
      >
        <Box width={600} margin="auto">
          <Typography
            variant="subtitle1"
            align="center"
            color="secondary"
            sx={{
              marginTop: 10,
              marginLeft: 4,
              marginRight: 4,
              fontFamily: "Nunito",
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
            fontWeight="700"
            color="#b3b3cc"
          >
            We are on a mision to help students hone their skills by providing a
            freelancing platform
          </Typography>
          <Typography variant="body1" align="center" marginBottom={6}>
            Our mission is reduce the hassle of finding reliable services on
            students
          </Typography>
          <Stack direction="row" spacing={4}>
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
      <Box
        sx={{
          bgcolor: "primary.main",
          color: "white",
          height: "100vh",

          padding: "15px",
          "&: hover": {
            bgcolor: "primary.light",
          },
        }}
      >
        <Stack direction="row" spacing={5} marginTop={10} marginLeft={10}>
          <Container>
            <Typography variant="h3" fontWeight="700px">
              Our Ultimate Goal
            </Typography>
            <Typography variant="body1" marginTop={1}>
              We aim high trying to design the most effective and efficient
              freelancing platform for KNUST students.
              <br />
              This platform is accessible to all students, and encourages
              studnts to help each other through the exchange of services.
              <br />
              This will serve as a platform for students to practise what they
              have learnt and gain experience. <br />
              <br />
              We paln on doing all that cultivating our values: <br />
              <Typography variant="body2" fontWeight="700px" marginTop={1}>
                Customer obsessed. Our customers come first at all times.
              </Typography>
            </Typography>
          </Container>
          <Container>
            <Grid direction="column">
              <Grid item>
                <Typography variant="h4" fontWeight="bold">
                  10
                </Typography>
                <Typography variant="boby3" fontWeight="bold">
                  Number of Stulancers
                </Typography>
              </Grid>
              <Grid item>
                <Typography variant="h4" fontWeight="bold">
                  10
                </Typography>
                <Typography variant="boby3">Followers on Twitter</Typography>
              </Grid>
              <Grid item>
                <Typography variant="h4" fontWeight="bold">
                  10
                </Typography>
                <Typography variant="boby3">Stars on GitHub</Typography>
              </Grid>
              <Grid item>
                <Typography variant="h4" fontWeight="bold">
                  10
                </Typography>
                <Typography variant="boby3">Contributers</Typography>
              </Grid>
            </Grid>
          </Container>
        </Stack>
      </Box>
    </Box>

  );
};
export default AboutUS;
