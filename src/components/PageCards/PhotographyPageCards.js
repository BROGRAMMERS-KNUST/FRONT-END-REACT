import React from "react";
import { Typography, Box, Stack, Card, Button } from "@mui/material";

function PageCards() {
  return (
    <Box marginLeft={3} marginRight={4}>
      <Stack direction="row" spacing={5} sx={{ flexWrap: "nowrap" }}>
        <Stack>
          <Card
            sx={{
              background:
                "url('https://www.thoughtco.com/thmb/GAtp0KJWAXudEuz9ufGu2jKAdYQ=/3909x2199/smart/filters:no_upscale()/film-photography-592347645-59e4d0609abed500119e7b14.jpg') ",
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
            Photography
          </Typography>
          <Typography variant="body" width="300px">
            <Button variant="text">Photoshoots</Button> <br />{" "}
            <Button variant="text"> Birthdays & Parties</Button> <br />{" "}
            <Button variant="text">Graduation & Matriculation </Button>
            <br /> <Button variant="text">Local photography</Button>
          </Typography>
        </Stack>

        <Stack>
          <Card
            sx={{
              background:
                "url('https://cdn.mos.cms.futurecdn.net/9bjnhkgWn4CVMZzbNHw7de-320-80.jpg') ",
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
            Video Editing 
          </Typography>
          <Typography variant="body" width="300px">
          <Button variant="text">Video Editing</Button> <br />{" "}
            <Button variant="text">Social Media Videos</Button> <br />{" "}
            <Button variant="text">Real Estate Promos</Button>
            <br /> <Button variant="text">Animation</Button>
          </Typography>
        </Stack>

        <Stack>
          <Card
            sx={{
              background:
                "url('https://berkas.lektur.id/kbbi-tesaurus/miscellaneous.jpg') ",
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
            Miscellaneous
          </Typography>
          <Typography variant="body" width="300px">
          <Button variant="text">Logo Animation</Button> <br />{" "}
            <Button variant="text">NFT Animation</Button> <br />{" "}
            <Button variant="text">Animation for Kids</Button>
            <br /> <Button variant="text">Videographers</Button>
          </Typography>
        </Stack>
      </Stack>
    </Box>
  );
}

export default PageCards;
