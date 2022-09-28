import { Button, Typography } from "@mui/material";
import React from "react";
import { Box, Container, LinearProgress } from "@mui/material";
import { ChevronRight } from "@mui/icons-material";

const BoxThree = () => {
  return (
    <div>
      <Box
        sx={{
          bgcolor: "#000042",
          color: "white",
          height: "80vh",
          padding: "15px",
          "&:hover": {
            bgcolor: "#000057",
          },
        }}
      >
        <Container marginLeft={10}>
          <Typography marginTop={10} variant="h3" fontWeight="bold">
            Teams
          </Typography>
          <Typography variant="body1" marginTop={1}>
            StuLancer is maintained by a group of invaluable core contributors
          </Typography>
          <Button
            sx={{ marginTop: 5 }}
            variant="contained"
            endIcon={<ChevronRight />}
            color="secondary"
          >
            See Individual Roles
          </Button>
          <LinearProgress sx={{ marginTop: 8, color: "white" }} />
        </Container>
      </Box>
    </div>
  );
};

export default BoxThree;
