import React from "react";
import { Typography, Box, Stack, Card } from "@mui/material";

function PageCards() {
  return (
    <Box marginLeft={3} marginRight={4}>
      <Stack direction="row" spacing={5} sx={{ flexWrap: "nowrap" }}>
        <Stack>
          <Card
            sx={{
              background:
                "url('https://www.ghanayello.com/img/gh/j/1623446783-57-pixxxy-photography.jpg') ",
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
                "url('https://images.unsplash.com/photo-1464349153735-7db50ed83c84?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=964&q=80') ",
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
            Birthdays & Parties
          </Typography>
          <Typography variant="body" width="300px">
            Get the best of photographers for your birthday events.
          </Typography>
        </Stack>

        <Stack>
          <Card
            sx={{
              background:
                "url('https://imgs.search.brave.com/pGWN2s3OA4uEJTASyBvEpcigcsFSM1H_cR-IhuJN3UI/rs:fit:678:225:1/g:ce/aHR0cHM6Ly90c2Uy/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC4y/MjF3ZUxtenBWVlNw/QU5iaTI3UUx3SGFG/TCZwaWQ9QXBp') ",
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
            Graduation & Matriculation
          </Typography>
          <Typography variant="body" width="300px">
            Get the best pictures of your academic milestones.
          </Typography>
        </Stack>
      </Stack>
    </Box>
  );
}

export default PageCards;
