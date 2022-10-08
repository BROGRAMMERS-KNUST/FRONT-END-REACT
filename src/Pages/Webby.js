import React from 'react';
import GraphicDesignPageCards from '../components/PageCards/GraphicDesignPageCards';
import { Box, Link, Breadcrumbs, Typography } from '@mui/material';
import StulancersAvailable from '../Pages/StulancersAvailable';
import Navbar from '../components/Header/Navbar';
import WebbyCards from '../components/PageCards/WebbyCards';
function Webby() {
  return (
    
    <div>
      <Box sx={{ marginTop: 10, marginLeft: 4, marginRight: 4 }}>
        <Navbar />
        <WebbyCards/>
      </Box>
    </div>
    
  )
}

export default Webby