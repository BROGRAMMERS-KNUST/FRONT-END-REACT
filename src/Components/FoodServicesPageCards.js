import React from "react";
import { Typography, Box, Stack, Card } from "@mui/material";

function FoodServicesPageCards() {
  return (
    <Box>
      <Stack direction="row" spacing={4} sx={{ flexWrap: "wrap" }}>
        <Stack>
          <Card
            sx={{
              background:
                "url('https://www.lacademie.com/wp-content/uploads/2022/02/ghanaian-food.jpg') ",
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
            }}
          >
            Photoshoots
          </Typography>
          <Typography variant="body" width="300px">
            Get memories that will last a lifetime.
          </Typography>
        </Stack>

        <Stack>
          <Card
            sx={{
              background:
                "url('https://cdn.modernghana.com/images/content/422202223908-txobredq5l-gob3.jpg') ",
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
            }}
          >
            Birthdays and Parties
          </Typography>
          <Typography variant="body" width="300px">
            Get the best of photographers for your birthday events.
          </Typography>
        </Stack>

        <Stack>
          <Card
            sx={{
              background:
                "url('https://telandeworld.com/wp-content/uploads/2021/01/Telande-Coconut-Oil-Shito.jpg') ",
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
            }}
          >
            Get Your Shito Delivered at your Door Step
          </Typography>
          <Typography variant="body" width="300px">
            Get the best pictures of your academic milestones.
          </Typography>
        </Stack>
      </Stack>
    </Box>
  );
}

export default FoodServicesPageCards;
