import { Typography, Box, Breadcrumbs, Link } from "@mui/material";
import React from "react";
import Navbar from "../Components/Header/Navbar";
import PhotographyPageCards from "../Components/PageCards/PhotographyPageCards";
import StulancersAvailable from "../Components/StulancersAvailable";

export default function PhotograhyPage() {
  return (
    <Box sx={{ marginTop: 10, marginLeft: 4, marginRight: 4 }}>
      <Navbar />
      <Breadcrumbs>
        <Link href="/" underline="hover">
          STULANCER
        </Link>
        <Link underline="hover">PHOTOGRAPHY</Link>
      </Breadcrumbs>
      <Typography variant="h4" sx={{ marginTop: 1, marginBottom: 2 }}>
        Photography
      </Typography>
      <PhotographyPageCards />
      <StulancersAvailable />
    </Box>
  );
}
