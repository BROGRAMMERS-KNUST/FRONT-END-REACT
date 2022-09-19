import React from "react";
import { Box, Link, Breadcrumbs, Typography } from "@mui/material";
import StulancersAvailable from "../Components/StulancersAvailable";
import Navbar from "../Components/Navbar";
import FoodServicesPageCards from "../Components/FoodServicesPageCards";

function FoodServicesPage() {
  return (
    <div>
      <Box sx={{ marginTop: 10, marginLeft: 4, marginRight: 4 }}>
        <Navbar />
        <Breadcrumbs>
          <Link href="/" underline="hover">
            STULANCER
          </Link>
          <Link underline="hover">Explore Food Services</Link>
        </Breadcrumbs>
        <Typography
          variant="h4"
          sx={{ marginTop: 1, marginBottom: 2, fontFamily: "Nunito" }}
        >
          Food Services
        </Typography>
        <FoodServicesPageCards />
        <StulancersAvailable />
      </Box>
    </div>
  );
}

export default FoodServicesPage;
