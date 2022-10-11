//COMPONENTS
import React from "react";
import { Typography, Box, Stack, Card, Button } from "@mui/material";
import BrushIcon from "@mui/icons-material/Brush";
import VideoCallIcon from "@mui/icons-material/VideoCall";
import CameraAltIcon from "@mui/icons-material/CameraAlt";
import AnimationIcon from "@mui/icons-material/Animation";
import SchoolIcon from "@mui/icons-material/School";
import FilterIcon from "@mui/icons-material/Filter";

//IMAGES
import writingOne from "../../images/PagecardImages/writingOne.webp";
import writingTwo from "../../images/PagecardImages/writingTwo.webp";
import writingThree from "../../images/PagecardImages/writingThree.webp";
import writingFour from "../../images/PagecardImages/writingFour.png";

function PageCards() {
  return (
    <Box marginLeft={1}>
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
      <Typography fontWeight="medium">
        {" "}
        Most popular in Writing & Translation
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
          <VideoCallIcon color="primary" /> Translation
        </Box>
        <Box
          sx={{
            bgcolor: "background.paper",
            boxShadow: 1,
            borderRadius: 2,
            p: 2,
            width: "11vw",
          }}
        >
          <VideoCallIcon color="primary" /> Ghostwriting
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
          <BrushIcon color="primary" /> Resume Writing
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
          <AnimationIcon color="primary" /> Translation
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
          <SchoolIcon color="primary" /> Client call
        </Box>
      </Stack>
      <br />
      <Typography variant="h5" fontWeight="medium">
        Explore Writing & Translation
      </Typography>
      <Stack direction="row" spacing={5} sx={{ flexWrap: "nowrap" }}>
        <Stack>
          <Card
            sx={{
              background: `url(${writingOne})`,
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
            Content Writing and Editing
          </Typography>
          <Typography variant="body" width="300px">
            <Button sx={{ color: "black" }}>Articles & Blog Posts</Button>{" "}
            <br />
            <Button sx={{ color: "black" }}>Proofreading & Editing</Button>
            <br /> <Button sx={{ color: "black" }}>Website Content </Button>
            <Button sx={{ color: "black" }}>Book Writing & Editing</Button>
          </Typography>
        </Stack>

        <Stack>
          <Card
            sx={{
              background: `url(${writingTwo})`,
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
            Career Writing
          </Typography>
          <Typography variant="body" width="300px">
            <Button sx={{ color: "black" }}>Resume Writing </Button>
            <br /> <Button sx={{ color: "black" }}>Cover Letters </Button>{" "}
            <br />
            <Button sx={{ color: "black" }}>LinkedIn Profiles</Button>
          </Typography>
        </Stack>

        <Stack>
          <Card
            sx={{
              background: `url(${writingThree})`,
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
            Translation & Transcription
          </Typography>
          <Typography variant="body" width="300px">
            <Button sx={{ color: "black" }}>Translation </Button> <br />
            <Button sx={{ color: "black" }}>Transcription</Button>
          </Typography>
        </Stack>
      </Stack>
    </Box>
  );
}

export default PageCards;
