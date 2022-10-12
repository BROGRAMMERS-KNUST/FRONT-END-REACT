import React from "react";
import WritingAndTranslationPageCards from "../components/PageCards/WritingAndTranslationPageCards";
import { Box, Link, Breadcrumbs } from "@mui/material";
import StulancersAvailable from "../Pages/StulancersAvailable";
import Navbar from "../components/Header/Navbar";

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
      <WritingAndTranslationPageCards />
      <StulancersAvailable service="Author" />
    </Box>
  );
}

export default WritingAndTranslationPage;
