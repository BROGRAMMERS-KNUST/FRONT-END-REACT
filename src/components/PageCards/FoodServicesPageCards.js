import React from "react";
import { Typography, Box, Stack, Card, Button } from "@mui/material";

//IMAGES
import foodOne from "../../images/PagecardImages/foodOne.webp";
import foodTwo from "../../images/PagecardImages/foodTwo.jpeg";
import foodThree from "../../images/PagecardImages/foodThree.jpg";

function FoodServicesPageCards() {
  return (
    <Box>
      <Box
        sx={{
          background: "#0D4114",
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
        >
          Food Services
        </Typography>
        <Typography align="center" fontFamily={"Nunito"}>
          Get the best delivery services on campus
          <br />
          <br />
          <Button style={{ margin: "auto" }} variant="contained">
            {" "}
            How Stulancer Works
          </Button>
        </Typography>
      </Box>
      <Stack direction="row" spacing={8} sx={{ flexWrap: "wrap" }}>
        <Stack>
          <Card
            sx={{
              background: `url(${foodOne})`,
              backgroundSize: "cover",
              width: "300px",
              height: 200,
            }}
          ></Card>
          <Typography
            variant="h5"
            width="300px"
            sx={{
              fontFamily: "Nunito",
              marginTop: 1,
            }}
          >
            Food Delivery
          </Typography>
          <Typography variant="body" width="300px">
            Feeling hungry? Order your food from the best stulancers available
            with the fastest delivery.
          </Typography>
        </Stack>

        <Stack>
          <Card
            sx={{
              background: `url(${foodTwo})`,
              backgroundSize: "cover",
              width: 300,
              height: 200,
            }}
          ></Card>
          <Typography
            variant="h5"
            width="300px"
            sx={{
              fontFamily: "Nunito",
              marginTop: 1,
            }}
          >
            Catering Services
          </Typography>
          <Typography variant="body" width="300px">
            Do you need item13 for your events? Don't fret, there are Stulancers
            to sort you out.
          </Typography>
        </Stack>

        <Stack>
          <Card
            sx={{
              background: `url(${foodThree})`,
              backgroundSize: "cover",
              width: "300px",
              height: 200,
            }}
          />
          <Typography
            variant="h5"
            width="300px"
            sx={{
              fontFamily: "Nunito",
              marginTop: 1,
            }}
          >
            Miscellaneous
          </Typography>
          <Typography variant="body" width="300px">
            <Button sx={{ color: "black" }}>Fast Foods</Button>
            <br />
            <Button sx={{ color: "black" }}>Local Dishes</Button>
            <br />
            <Button sx={{ color: "black" }}>Continental Dishes</Button>
          </Typography>
        </Stack>
      </Stack>
    </Box>
  );
}

export default FoodServicesPageCards;
