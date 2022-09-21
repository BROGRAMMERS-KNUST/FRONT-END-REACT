import React from "react";
import { Box, Card, Stack, Typography } from "@mui/material";

function WritingAndTranslationPageCards() {
  return (
    <Box>
      <Stack direction="row" spacing={4} sx={{ flexWrap: "wrap" }}>
        <Stack>
          <Card
            sx={{
              background:
                "url('https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto/v1/attachments/generic_asset/asset/42593ecc6f1e40fd735892b99f001ea4-1631622804525/Content%20Writing%20_%20Editing.png') ",
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
            Content Writing and Editing
          </Typography>
          <Typography variant="body" width="300px">
            Articles & Blog Posts <br /> Proofreading & Editing <br /> Website
            Content <br /> Book Writing & Editing
          </Typography>
        </Stack>

        <Stack>
          <Card
            sx={{
              background:
                "url('https://imgs.search.brave.com/g0egLPZpxX6KL3P4-CdgN9zVZw6znn4p8kk4RAD9iBU/rs:fit:711:225:1/g:ce/aHR0cHM6Ly90c2Ux/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5t/WWhmQU5ScGxhSWlP/TWQxWHUxaGhRSGFF/OCZwaWQ9QXBp') ",
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
            Career Writing
          </Typography>
          <Typography variant="body" width="300px">
            Resume Writing <br /> Cover Letters <br /> LinkedIn Profiles
          </Typography>
        </Stack>

        <Stack>
          <Card
            sx={{
              background:
                "url('https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto/v1/attachments/generic_asset/asset/42593ecc6f1e40fd735892b99f001ea4-1631622804516/Translation%20_%20Transcription.png') ",
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
            Translation & Transcription
          </Typography>
          <Typography variant="body" width="300px">
            Translation <br /> Transcription
          </Typography>
        </Stack>
      </Stack>
    </Box>
  );
}

export default WritingAndTranslationPageCards;
