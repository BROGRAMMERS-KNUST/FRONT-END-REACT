import React from "react";
import { Typography, Box, Stack, Card, Button } from "@mui/material";
import Carousel from "react-material-ui-carousel";
import photographyFour from "../../images/PagecardImages/photographyFour.webp";
import photographyFive from "../../images/PagecardImages/photographyFive.jpg";
import photographySix from "../../images/PagecardImages/photographySix.jpg";

const PhotographyCarousel = () => {
  return (
    <Box>
      <Carousel>
        <Box
          sx={{
            background: `url(${photographyFour})`,
            color: "white",
            height: "200px",
            width: "95vw",
            borderRadius: "10px",
            marginTop: 3,
            margin: "auto",
            marginBottom: 5,
            marginLeft: 0,
          }}
        >
          <Typography
            align="center"
            variant="h4"
            paddingTop={3}
            fontFamily={"Nunito"}
            fontWeight="bold"
          >
            Photography & Video
          </Typography>
          <Typography align="center" fontFamily={"Nunito"} fontWeight="bold">
            Bring your story to life with creative videos
            <br />
            <br />
            <Button style={{ margin: "auto" }} variant="contained">
              {" "}
              How Stulancer Works
            </Button>
          </Typography>
        </Box>
        <Box
          sx={{
            background: `url(${photographyFive})`,
            backgroundSize: "cover",
            color: "white",
            height: "200px",
            width: "95vw",
            borderRadius: "10px",
            marginTop: 3,
            margin: "auto",
            marginBottom: 5,
            marginLeft: 0,
          }}
        >
          <Typography
            align="center"
            variant="h4"
            paddingTop={3}
            fontFamily={"Nunito"}
            fontWeight="bold"
          >
            Photography & Video
          </Typography>
          <Typography align="center" fontFamily={"Nunito"} fontWeight="bold">
            Bring your story to life with creative videos
            <br />
            <br />
            <Button style={{ margin: "auto" }} variant="contained">
              {" "}
              How Stulancer Works
            </Button>
          </Typography>
        </Box>
        <Box
          sx={{
            background: `url(${photographySix})`,
            backgroundSize: "cover",
            color: "black",
            height: "200px",
            width: "95vw",
            borderRadius: "10px",
            marginTop: 3,
            margin: "auto",
            marginBottom: 5,
            marginLeft: 0,
          }}
        >
          <Typography
            align="center"
            variant="h4"
            paddingTop={3}
            fontFamily={"Nunito"}
            fontWeight="bold"
          >
            Photography & Video
          </Typography>
          <Typography align="center" fontFamily={"Nunito"} fontWeight="bold">
            Bring your story to life with creative videos
            <br />
            <br />
            <Button style={{ margin: "auto" }} variant="contained">
              {" "}
              How Stulancer Works
            </Button>
          </Typography>
        </Box>
      </Carousel>
    </Box>
  );
};

export default PhotographyCarousel;
