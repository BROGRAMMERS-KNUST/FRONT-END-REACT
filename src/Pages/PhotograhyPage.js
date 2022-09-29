import { Typography, Box, Breadcrumbs, Link } from "@mui/material";
import React from "react";
import Navbar from "../components/Header/Navbar";
import PhotographyPageCards from "../components/PageCards/PhotographyPageCards";
import StulancersAvailable from "./StulancersAvailable";

export default function PhotograhyPage() {
  return (
    <Box sx={{ marginTop: 10, marginLeft: 4, marginRight: 4 }}>
      <Navbar />
      <Breadcrumbs>
        <Link href="/" underline="hover">
          STULANCER
        </Link>
        <Link underline="hover" href="/photography">
          PHOTOGRAPHY
        </Link>
      </Breadcrumbs>
      <Typography
        variant="h4"
        sx={{ marginTop: 1, marginBottom: 2 }}
        color="secondary"
      >
        Photography
      </Typography>
      <PhotographyPageCards />
      <StulancersAvailable field="photography" />
    </Box>
  );
}
