import React from "react";
import GraphicDesignPageCards from "../Components/GraphicDesignPageCards";
import { Box, Link, Breadcrumbs, Typography } from "@mui/material";
import StulancersAvailable from "../Components/StulancersAvailable";
import Navbar from "../Components/Navbar";

function GraphicDesignPage() {
  return (
    <div>
      <Box sx={{ marginTop: 10, marginLeft: 4, marginRight: 4 }}>
        <Navbar />
        <Breadcrumbs>
          <Link href="/" underline="hover">
            STULANCER
          </Link>
          <Link underline="hover">GRAPHIC DESIGN</Link>
        </Breadcrumbs>
        <Typography
          variant="h4"
          sx={{ marginTop: 1, marginBottom: 2, fontFamily: "Nunito" }}
        >
          Graphic Design
        </Typography>
        <GraphicDesignPageCards />
        <StulancersAvailable />
      </Box>
    </div>
  );
}

export default GraphicDesignPage;
