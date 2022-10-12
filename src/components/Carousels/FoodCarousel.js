import React from "react";
import { Typography, Box, Button } from "@mui/material";
import Carousel from "react-material-ui-carousel";
import foodFour from "../../images/PagecardImages/foodFour.jpg";
import foodFive from "../../images/PagecardImages/foodFive.jpeg";
import foodSix from "../../images/PagecardImages/foodSix.png";

const FoodCarousel = () => {
  return (
    <Box>
      <Carousel>
        <Box
          sx={{
            background: `url(${foodFour})`,
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
            Food Services
          </Typography>
          <Typography align="center" fontFamily={"Nunito"} fontWeight="bold">
            Get the best delivery services on campus
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
            background: `url(${foodFive})`,
            color: "white",
            height: "200px",
            width: "95vw",
            borderRadius: "10px",
            marginTop: 3,
            margin: "auto",
            marginBottom: 5,
            marginLeft: 0,
          }}
          fontWeight="bold"
        >
          <Typography
            align="center"
            variant="h4"
            paddingTop={3}
            fontFamily={"Nunito"}
          >
            Food Services
          </Typography>
          <Typography align="center" fontFamily={"Nunito"} fontWeight="bold">
            Get the best delivery services on campus
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
            background: `url(${foodSix})`,

            color: "black",
            height: "200px",
            width: "95vw",
            borderRadius: "10px",
            marginTop: 3,
            margin: "auto",
            marginBottom: 5,
            marginLeft: 0,
          }}
          fontWeight="bold"
        >
          <Typography
            align="center"
            variant="h4"
            paddingTop={3}
            fontFamily={"Nunito"}
          >
            Food Services
          </Typography>
          <Typography align="center" fontFamily={"Nunito"} fontWeight="bold">
            Get the best delivery services on campus
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

export default FoodCarousel;
