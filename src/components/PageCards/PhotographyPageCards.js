import React from "react";
import { Typography, Box, Stack, Card, Button } from "@mui/material";
import BrushIcon from "@mui/icons-material/Brush";
import VideoCallIcon from '@mui/icons-material/VideoCall';
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import AnimationIcon from '@mui/icons-material/Animation';
import SchoolIcon from '@mui/icons-material/School';
import FilterIcon from '@mui/icons-material/Filter';


function PageCards() {
  return (
    <Box marginLeft={1}>
      <Box
        sx={{
          background: "#530326",
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
          Photography & Video
        </Typography>
        <Typography align="center" fontFamily={"Nunito"}>
          Bring your story to life with creative videos
          <br />
          <br />
          <Button style={{ margin: "auto" }} variant="contained">
            {" "}
            How Stulancer Works
          </Button>
        </Typography>
      </Box>
      <Typography fontWeight="medium">
        {" "}
        Most popular in Photograpgy & Video
      </Typography>{" "}
      <br />
      <Stack direction="row" spacing={4} sx={{ flexWrap: "nowrap" }}>
        <Box
          sx={{
            bgcolor: "background.paper",
            boxShadow: 1,
            borderRadius: 2,
            p: 2,
            width: "11vw",
          }}
        >
          <VideoCallIcon color="primary" /> Video Editing
        </Box>
        <Box
          sx={{
            bgcolor: "background.paper",
            boxShadow: 1,
            borderRadius: 2,
            p: 2,
            width: "10vw",
          }}
        >
          <CameraAltIcon color="primary" /> Photoshoot
        </Box>
        <Box
          sx={{
            bgcolor: "background.paper",
            boxShadow: 1,
            borderRadius: 2,
            p: 2,
            width: "14vw",
          }}
        >
          <BrushIcon color="primary" /> Social Media Videos
        </Box>
        <Box
          sx={{
            bgcolor: "background.paper",
            boxShadow: 1,
            borderRadius: 2,
            p: 2,
            width: "10vw",
          }}
        >
          <AnimationIcon color="primary" /> Animation
        </Box>
        <Box
          sx={{
            bgcolor: "background.paper",
            boxShadow: 1,
            borderRadius: 2,
            p: 2,
            width: "17vw",
          }}
        >
          <SchoolIcon color="primary" /> Graduation & Matriculation
        </Box>
        <Box
          sx={{
            bgcolor: "background.paper",
            boxShadow: 1,
            borderRadius: 2,
            p: 2,
            width: "12vw",
          }}
        >
          <FilterIcon color="primary" /> Logo Animation
        </Box>
      </Stack>
      <br />
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
                "url('https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto/v1/attachments/generic_asset/asset/db9a26d5b822890f6b4e7f91b878ab19-1631622451064/Video%20Editing%20_%20Post-Production.png') ",
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
