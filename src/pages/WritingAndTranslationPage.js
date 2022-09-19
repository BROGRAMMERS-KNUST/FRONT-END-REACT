import React from "react";
import WritingAndTranslationPageCards from "../Components/WritingAndTranslationPageCards";
import { Box, Link, Breadcrumbs, Typography } from "@mui/material";
import StulancersAvailable from "../Components/StulancersAvailable";
import Navbar from "../Components/Navbar";

function WritingAndTranslationPage() {
  return (
    <Box sx={{ marginTop: 10, marginLeft: 4, marginRight: 4 }}>
      <Navbar />
      <Breadcrumbs>
        <Link href="/" underline="hover">
          STULANCER
        </Link>
        <Link underline="hover">WRITING & TRANSLATION</Link>
      </Breadcrumbs>
      <Typography
        variant="h4"
        sx={{ marginTop: 1, marginBottom: 2, fontFamily: "Nunito" }}
      >
        Explore Writing & Translation
      </Typography>
      <WritingAndTranslationPageCards />
      <StulancersAvailable />
    </Box>
  );
}

export default WritingAndTranslationPage;
