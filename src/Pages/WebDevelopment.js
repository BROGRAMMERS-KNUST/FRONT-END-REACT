import { Typography, Box, Breadcrumbs, Link } from '@mui/material';
import React from 'react';
import Navbar from '../components/Header/Navbar';
import WebDev from '../components/PageCards/WebDev';
import StulancersAvailable from './StulancersAvailable';

export default function WebDevelopment() {
  return (
    <Box sx={{ marginTop: 10, marginLeft: 4, marginRight: 4 }}>
      <Navbar />
      <Breadcrumbs>
        <Link href='/' underline='hover'>
          STULANCER
        </Link>
        <Link underline='hover'>PHOTOGRAPHY</Link>
      </Breadcrumbs>
      <Typography variant='h4' sx={{ marginTop: 1, marginBottom: 2 }}>
        Photography
      </Typography>
      <WebDev />
      <StulancersAvailable service='Web Developer' />
    </Box>
  );
}
