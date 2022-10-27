import React from 'react';
import { Box, Breadcrumbs, Link } from '@mui/material';
import StulancersAvailable from '../Pages/StulancersAvailable';
import Navbar from '../components/Header/Navbar';
import WebCarousel from '../components/Carousels/WebCarousel';
import WebDesignPageCards from '../components/PageCards/WebDesignPageCards';
function Webby() {
  document.title = 'StuLancer-Web Development 👩‍💻';
  return (
    <div>
      <Box sx={{ marginTop: 10, marginLeft: 5, marginRight: 5 }}>
        <Navbar />
        <Breadcrumbs>
          <Link href='/' underline='hover'>
            STULANCER
          </Link>
          <Link underline='hover' href='/webdevelopment'>
            WEB DEVELOPMENT
          </Link>
        </Breadcrumbs>
        <WebCarousel />
        <WebDesignPageCards />
        <StulancersAvailable service='Web Developer' />
      </Box>
    </div>
  );
}

export default Webby;
