import React from "react";
import GraphicDesignPageCards from "../components/PageCards/GraphicDesignPageCards";
import { Box, Link, Breadcrumbs, Typography } from "@mui/material";
import StulancersAvailable from "../components/StulancersAvailable";
import Navbar from "../components/Header/Navbar";


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
        <GraphicDesignPageCards />
        <StulancersAvailable />
      </Box>
    </div>
  );
}

export default GraphicDesignPage;
