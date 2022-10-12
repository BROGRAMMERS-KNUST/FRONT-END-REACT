import React from "react";
import { Box, Typography, Button } from "@mui/material";
import Carousel from "react-material-ui-carousel";
import graphicSix from "../../images/PagecardImages/graphicSix.png";
import graphicSeven from "../../images/PagecardImages/graphicSeven.jpg";
import graphicEight from "../../images/PagecardImages/graphicEight.jpg";

const GraphicCarousel = () => {
  return (
    <Box>
      <Carousel>
        <Box
          sx={{
            background: `url(${graphicSix})`,

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
            Graphics & Design
          </Typography>
          <Typography align="center" fontFamily={"Nunito"} fontWeight="bold">
            Design to make you standout
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
            background: `url(${graphicSeven})`,
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
            Graphics & Design
          </Typography>
          <Typography align="center" fontFamily={"Nunito"} fontWeight="bold">
            Design to make you standout
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
            background: `url(${graphicEight})`,
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
            Graphics & Design
          </Typography>
          <Typography align="center" fontFamily={"Nunito"} fontWeight="bold">
            Design to make you standout
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

export default GraphicCarousel;
