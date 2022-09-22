
import React from "react";
import { Box, Card, Stack, Typography,Link,Button,Tooltip } from "@mui/material";

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
          <Link underline="none" href="/" color ="inherit">
          <Button color ="inherit" >Articles & Blog Posts</Button>
         </Link>
              <br />
               <Link underline="none" href="/" color ="inherit"><Button color ="inherit" >Book Writing & Editing</Button></Link>
              <br />
              <Link underline="none" href="/" color ="inherit"><Button color ="inherit">Proofreading & Editing</Button></Link>
              <br />
              <Link underline="none" href="/" color ="inherit"><Button color ="inherit">Website Content</Button></Link>
              <br />
               
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
          <Link underline="none" href="/" color ="inherit"><Button color ="inherit">Resume Writing</Button> </Link>
              <br />
               <Link underline="none" href="/" color ="inherit"><Button color ="inherit">Cover Letters</Button></Link>
              <br />
              <Link underline="none" href="/" color ="inherit"><Button color ="inherit">LinkedIn Profiles</Button></Link>           
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
          <Link underline="none" href="/" color ="inherit"><Button color ="inherit">Translation </Button> </Link>
              <br />
               <Link underline="none" href="/" color ="inherit"><Button color ="inherit">Transcription</Button></Link>
            
          </Typography>
        </Stack>
      </Stack>
    </Box>
  );
}

export default WritingAndTranslationPageCards;
