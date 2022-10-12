import React from "react";
import GraphicDesignPageCards from "../components/PageCards/GraphicDesignPageCards";
import { Box, Link, Breadcrumbs } from "@mui/material";
import StulancersAvailable from "../Pages/StulancersAvailable";
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
          <Link underline="hover" href="/graphic-design">
            GRAPHIC DESIGN
          </Link>
        </Breadcrumbs>
        <GraphicDesignPageCards />
        <StulancersAvailable service="Graphic Designer" />
      </Box>
    </div>
  );
}

export default GraphicDesignPage;
