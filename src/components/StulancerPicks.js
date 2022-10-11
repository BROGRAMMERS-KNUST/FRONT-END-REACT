import React from "react";
import { Box, Typography } from "@mui/material";
import StulancersAvailable from "../Pages/StulancersAvailable";

const StulancerPicks = () => {
  return (
    <Box marginTop={5}>
      <Typography
        variant="h4"
        fontFamily="Nunito"
        margintop={1}
        fontWeight="bold"
      >
        Our Pick of Stulancers for the week
      </Typography>
      <Typography variant="body1">Coming soon...</Typography>
    </Box>
  );
};

export default StulancerPicks;
