import React from 'react';
import GraphicDesignPageCards from '../components/PageCards/GraphicDesignPageCards';
import { Box, Link, Breadcrumbs } from '@mui/material';
import StulancersAvailable from '../Pages/StulancersAvailable';
import Navbar from '../components/Header/Navbar';
import GraphicCarousel from '../components/Carousels/GraphicCarousel';

function GraphicDesignPage() {
  return (
    <div>
      <Box sx={{ marginTop: 10, marginLeft: 5, marginRight: 5 }}>
        <Navbar />
        <Breadcrumbs>
          <Link href='/' underline='hover'>
            STULANCER
          </Link>
          <Link underline='hover' href='/graphic-design'>
            GRAPHIC DESIGN
          </Link>
        </Breadcrumbs>
        <GraphicCarousel />
        <StulancersAvailable service='Graphic Designer' />
      </Box>
    </div>
  );
}

export default GraphicDesignPage;
