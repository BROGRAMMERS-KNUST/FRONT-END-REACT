import StulancerComp from "../components/StulancerComp";
import { useSelector } from "react-redux";

import React, { useEffect } from "react";
import { CircularProgress, Grid, Typography, Box } from "@mui/material";
import { useDispatch } from "react-redux";
import { getProfiles } from "../action/posts";

function StulancersAvailable(service) {
  const { stulancers } = useSelector((state) => state.posts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProfiles(service));
  }, [dispatch, service]);

  return !stulancers ? (
    <Box sx={{ marginTop: 4, marginLeft: 2 }}>
      <Typography variant="h5" sx={{ fontFamily: "Nunito" }}>
        Loading Stulancers...
      </Typography>
      <CircularProgress />
    </Box>
  ) : (
    <Box
      sx={{
        marginTop: 4,
        marginBottom: 4,
        marginLeft: "0.9rem",
        marginRight: "0.9rem",
      }}
    >
      <Typography
        color="primary"
        variant="h5"
        sx={{ marginTop: 1, marginBottom: 2, fontFamily: "Nunito" }}
      >
        Stulancers Available
      </Typography>
      <Grid container spacing={5} flexWrap columns={4}>
        {stulancers.map((stulancer) => (
          <Grid item key={stulancer._id}>
            <StulancerComp stulancer={stulancer} field={service} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default StulancersAvailable;
