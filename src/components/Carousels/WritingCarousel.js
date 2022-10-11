import { Typography, Box, Stack, Card, Button } from "@mui/material";
import Carousel from "react-material-ui-carousel";
import writingFour from "../../images/PagecardImages/writingFour.png";
import writingFive from "../../images/PagecardImages/writingFive.jpeg";
import writingSix from "../../images/PagecardImages/writingSix.jpeg";

import React from "react";

const WritingCarousel = () => {
  return (
    <Box>
      <Carousel>
        <Box
          sx={{
            background: `url(${writingFour})`,
            backgroundSize: "cover",
            color: "primary",
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
            Writing & Translation
          </Typography>
          <Typography align="center" fontFamily={"Nunito"} fontWeight="bold">
            Get your words across-in any language
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
            background: `url(${writingFive})`,
            backgroundSize: "cover",
            color: "primary",
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
            Writing & Translation
          </Typography>
          <Typography align="center" fontFamily={"Nunito"} fontWeight="bold">
            Get your words across-in any language
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
            background: `url(${writingSix})`,
            backgroundSize: "cover",
            color: "primary",
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
            Writing & Translation
          </Typography>
          <Typography align="center" fontFamily={"Nunito"} fontWeight="bold">
            Get your words across-in any language
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

export default WritingCarousel;
