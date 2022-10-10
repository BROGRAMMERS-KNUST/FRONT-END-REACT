import { Button, Typography } from "@mui/material";
import React from "react";
import { Box, Container, LinearProgress } from "@mui/material";
import { ChevronRight } from "@mui/icons-material";
import Developers from "./Developers";

const BoxThree = () => {
  return (
    <div>
      <Box
        bgcolor="#4682B4"
        sx={{
          color: "white",
          padding: "15px",
        }}
      >
        <Container marginLeft={10}>
          <Typography marginTop={10} variant="h3" fontWeight="bold">
            Team
          </Typography>
          <Typography
            variant="body1"
            marginTop={1}
            borderBottom="solid #F5F5F5"
            paddingBottom={5}
          >
            StuLancer is maintained by a group of invaluable core contributors
            <br />
            <br />
            <Button
              variant="contained"
              endIcon={<ChevronRight />}
              color="secondary"
            >
              See Individual Roles
            </Button>
          </Typography>
        </Container>
        <Container marginTop={2}>
          <Developers />
        </Container>
      </Box>
    </div>
  );
};

export default BoxThree;
