import { Typography, Box, Breadcrumbs, Link, Button } from "@mui/material";
import React from "react";
import Navbar from "../components/Header/Navbar";
import WebDev from "../components/PageCards/WebDev";
import StulancersAvailable from "../components/StulancersAvailable";
import { useDispatch } from "react-redux";
import { createPost } from "../action/posts";

export default function WebDevelopment() {
  const data = { name: "Ahl Bherto", reference: 203944949 };
  const dispatch = useDispatch();
  const handleClick = (e) => {
    e.preventDefault();
    dispatch(createPost(data));
  };
  return (
    <Box sx={{ marginTop: 10, marginLeft: 4, marginRight: 4 }}>
      <Navbar />
      <Breadcrumbs>
        <Link href="/" underline="hover">
          STULANCER
        </Link>
        <Link underline="hover">PHOTOGRAPHY</Link>
      </Breadcrumbs>
      <Typography variant="h4" sx={{ marginTop: 1, marginBottom: 2 }}>
        Photography
      </Typography>
      <WebDev />
      <Button
        size="large"
        color="primary"
        variant="outlined"
        onClick={handleClick}
      >
        Click me
      </Button>
      <StulancersAvailable />
    </Box>
  );
}
