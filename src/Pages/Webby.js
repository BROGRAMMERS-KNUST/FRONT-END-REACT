import React from 'react';
import { Box, Breadcrumbs, Link } from '@mui/material';
import StulancersAvailable from '../Pages/StulancersAvailable';
import Navbar from '../components/Header/Navbar';
import WebbyCards from '../components/PageCards/WebbyCards';
import WebCarousel from '../components/Carousels/WebCarousel';
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
        <StulancersAvailable service='Web Developer' />
      </Box>
    </div>
  );
}

export default Webby;
