import React from 'react';
import { Box, Link, Breadcrumbs, Typography } from '@mui/material';
import StulancersAvailable from '../Pages/StulancersAvailable';
import Navbar from '../components/Header/Navbar';
import FoodServicesPageCards from '../components/PageCards/FoodServicesPageCards';

function FoodServicesPage() {
  return (
    <div>
      <Box sx={{ marginTop: 10, marginLeft: 5, marginRight: 5 }}>
        <Navbar />
        <Breadcrumbs>
          <Link href='/' underline='hover'>
            STULANCER
          </Link>
          <Link underline='hover'>Explore Food Services</Link>
        </Breadcrumbs>

        <FoodServicesPageCards />
        <StulancersAvailable service='Caterer' />
      </Box>
    </div>
  );
}

export default FoodServicesPage;
